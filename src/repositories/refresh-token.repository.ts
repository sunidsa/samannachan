import { EntityRepository, Repository } from "typeorm";
import { RefreshToken } from "../entity/refresh-token.entity";

@EntityRepository(RefreshToken)
export class RefreshTokenRepository extends Repository<RefreshToken>{}