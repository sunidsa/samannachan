import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm'

@Entity('project')
export class Project {
  @PrimaryGeneratedColumn({ name: 'id_project' })
  projectId?: number

  @Column({ name: 'name_project' })
  name: string

  @Column()
  date: Date

  @Column({ name: 'num_project' })
  qty: number

  @Column({ name: 'id_user' })
  userID: number

  @Column({ name: 'project_img' })
  img: string

  @Column()
  status: number
}
