import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm'

@Entity('queue')
export class Queue {
  @PrimaryGeneratedColumn({ name: 'Queue' })
  queue?: number

  @Column({ name: 'order_id' })
  orderID: number

  @Column({ name: 'id_user' })
  userID: number

  
}
