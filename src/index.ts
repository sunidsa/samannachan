import { Application, Request, Response } from "express";
import "reflect-metadata";
import { createConnection, getCustomRepository } from "typeorm";
import { UserRepository } from "./repositories/user.repository";
import * as jwt from "jsonwebtoken"
import { User } from "./entity/user.entity";
import * as express from 'express'
import { loginDto } from "./dtos/login.dto";
import { RefreshTokenRepository } from "./repositories/refresh-token.repository";

require('dotenv').config()
const { v4: uuidv4 } = require('uuid');
const app: Application = express()
app.use(express.urlencoded());
app.use(express.json());

createConnection({
    name: 'default',
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: false,
    logging: false,
    entities: [
        "src/entity/**/*.ts"
    ],
    migrations: [
        "src/migration/**/*.ts"
    ],
    subscribers: [
        "src/subscriber/**/*.ts"
    ],
    cli: {
        entitiesDir: "src/entity",
        migrationsDir: "src/migration",
        subscribersDir: "src/subscriber"
    }
})

async function checkAccessToken(accessToken: string) {
    try {
        const jwtData = jwt.verify(accessToken, process.env.JWT_KEY)
        const refreshTokenData = await getCustomRepository(RefreshTokenRepository).findOne({ refreshToken: jwtData.refreshToken })
        if (!refreshTokenData) return 'refreshToken not found'
        const dateNow = new Date()
        if (dateNow > refreshTokenData.expire) return 'refreshToken expire'
        refreshTokenData.expire.setDate(new Date().getDate() + 1)
        return jwtData
    }
    catch {
        return 'invalid accessToken'
    }
}

app.get('/allUser', async (req: Request, res: Response) => {
    const users = await getCustomRepository(UserRepository).find()
    if (users.length === 0) return res.send('User not found')
    res.send(users)
})

app.post('/register', async (req: Request, res: Response) => {
    const user = new User()
    user.username = req.body["username"]
    user.password = req.body["password"]
    user.name = req.body["name"]
    user.email = req.body["email"]
    user.tel = req.body["tel"]
    user.type = "user"

    const userDB = getCustomRepository(UserRepository).findOne({ username: user.username })
    if (userDB) return res.send('User already in use')
    await getCustomRepository(UserRepository).save(user)
    res.send('success')
})

app.post('/login', async (req: Request, res: Response) => {
    const data = new loginDto()
    data.username = req.body["username"]
    data.password = req.body["password"]
    const user = await getCustomRepository(UserRepository).findOne({ username: data.username })
    if (!user) return res.send('User not found')
    const refreshToken = uuidv4()
    const accessToken = await jwt.sign({
        userId: user.userId,
        refreshToken
    },
        process.env.JWT_KEY
    )
    const date = new Date()
    date.setDate(date.getDate() + 1)
    await getCustomRepository(RefreshTokenRepository).save({
        refreshToken,
        expire: date,
    })
    res.send(accessToken)
})

app.post("/check", async (req: Request, res: Response) => {
    const accessToken = req.body["accessToken"]
    const jwtData = await checkAccessToken(accessToken)
    res.send(jwtData);
});

app.listen(process.env.PORT || 4000)