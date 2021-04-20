import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity()
export class Airport extends BaseEntity {
  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  code: string;
}
