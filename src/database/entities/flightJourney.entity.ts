import { Column, Entity, ManyToOne } from 'typeorm';
import { Airport } from './airport.entity';
import { BaseEntity } from './base.entity';
import { Flight } from './flight.entity';
import { FlightStatus } from '../enums/flightStatus';

@Entity()
export class FlightJourney extends BaseEntity {
  @ManyToOne(() => Airport)
  flight: Flight;

  @Column()
  departureTime: Date;

  @Column()
  status: FlightStatus;
}
