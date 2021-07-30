import { EntityRepository, Repository } from 'typeorm'
import { Orders } from '../entity/orders.entity'

@EntityRepository(Orders)
export class OrdersRepository extends Repository<Orders> {}
