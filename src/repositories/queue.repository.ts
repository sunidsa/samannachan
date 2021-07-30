import { EntityRepository, Repository } from 'typeorm'
import { Queue } from '../entity/queue.entity'

@EntityRepository(Queue)
export class QueueRepository extends Repository<Queue> {}
