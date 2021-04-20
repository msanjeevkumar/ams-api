import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Airline } from './airline.entity';

@Entity()
export class Aircraft extends BaseEntity {
  @Column()
  name: string;

  @Column()
  model: string;

  @ManyToOne(() => Airline)
  airline: Airline;
}
