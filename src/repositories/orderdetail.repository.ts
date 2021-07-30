import { EntityRepository, Repository } from 'typeorm'
import { OrderDetail } from '../entity/orderdetail.entity'

@EntityRepository(OrderDetail)
export class OrderDetailRepository extends Repository<OrderDetail> {}
