import { InjectRepository } from '@nestjs/typeorm';
import { Flight } from '../database/entities/flight.entity';
import { Repository } from 'typeorm';
import { Airport } from '../database/entities/airport.entity';

export class AirportService {
  constructor(
    @InjectRepository(Flight)
    private readonly flightRepository: Repository<Flight>,
  ) {}

  async getFlights(airportId: number) {
    const airport = new Airport();
    airport.id = airportId;
    return await this.flightRepository.find({
      where: [{ departure: airport }, { arrival: airport }],
    });
  }
}
