import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Role } from '../enums/role.enum';

@Entity()
export class User extends BaseEntity {
  @Column()
  username: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column('integer')
  role: Role;
}
