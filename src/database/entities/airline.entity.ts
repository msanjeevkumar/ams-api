import {  Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';
@Entity()
export class Airline extends BaseEntity {
  @Column()
  name: string;

  @Column()
  code: string;
}
