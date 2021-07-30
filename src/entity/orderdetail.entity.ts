import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm'

@Entity('orderdetail')
export class OrderDetail {
  @PrimaryGeneratedColumn({ name: 'id_preorder' })
  DetailId?: number

  @Column({ name: 'id_food' })
  foodID: number

  @Column()
  qty: number

  @Column()
  price: number

  @Column({ name: 'id_order' })
  orderID: number
  @Column({ name: 'id_user' })
  userID: number
  
}
