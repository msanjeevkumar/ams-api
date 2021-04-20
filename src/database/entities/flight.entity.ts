import { Column, Entity, ManyToOne } from 'typeorm';
import { Airport } from './airport.entity';
import { BaseEntity } from './base.entity';

@Entity()
export class Flight extends BaseEntity {
  @Column()
  flightNumber: string;

  @ManyToOne(() => Airport)
  departure: Airport;

  @ManyToOne(() => Airport)
  arrival: Airport;

  @Column()
  durationInMins: number;
}
