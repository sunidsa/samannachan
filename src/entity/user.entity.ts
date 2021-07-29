import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class User{
    @PrimaryGeneratedColumn({name: 'id_user'})
    userId: number

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    tel: string

    @Column()
    username: string

    @Column()
    password: string

    @Column()
    type: string
}