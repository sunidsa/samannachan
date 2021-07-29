import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm'

@Entity('food')
export class Food {
  @PrimaryGeneratedColumn({ name: 'id_food' })
  foodId?: number

  @Column({ name: 'name_food' })
  name: string

  @Column()
  price: string

  @Column({ name: 'id_type_food' })
  typeId: number

  @Column({ name: 'food_img' })
  img: string
}
