import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity('refresh_token')
export class RefreshToken {
  @PrimaryColumn({ name: 'refresh_token' })
  refreshToken: string

  @Column()
  expire: Date
}
