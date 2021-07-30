import { EntityRepository, Repository } from 'typeorm'
import { Type } from '../entity/type.entity'

@EntityRepository(Type)
export class TypeRepository extends Repository<Type> {}
