import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm'

@Entity('orders')
export class Orders {
  @PrimaryGeneratedColumn({ name: 'order_id' })
  orderId?: number

  @Column({ name: 'id_user' })
  userID: number

  @Column({ name: 'sum_price' })
  price: string

  
}
