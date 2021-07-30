import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm'

@Entity('type_food')
export class Type {
  @PrimaryGeneratedColumn({ name: 'id_type_food' })
  typeId?: number

  @Column({ name: 'name_type_food' })
  name: string

  
}
