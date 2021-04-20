import { InjectRepository } from '@nestjs/typeorm';
import { Flight } from '../database/entities/flight.entity';
import { Repository } from 'typeorm';
import { FlightJourney } from '../database/entities/flightJourney.entity';
import { FlightStatus } from '../database/enums/flightStatus';

export class FlightService {
  constructor(
    @InjectRepository(FlightJourney)
    private readonly flightJourneyRepository: Repository<FlightJourney>,
  ) {}

  async getJourneys(flightId: number) {
    const flight = new Flight();
    flight.id = flightId;

    const journeys = await this.flightJourneyRepository.find({
      where: { flight, isDeleted: false },
    });

    return journeys;
  }

  async addFlightSchedule(flightId: number, departureTime: Date) {
    const flight = new Flight();
    flight.id = flightId;

    const flightJournery = new FlightJourney();
    flightJournery.flight = flight;
    flightJournery.departureTime = departureTime;
    flightJournery.status = FlightStatus.SCHEDULED;

    await this.flightJourneyRepository.insert(flightJournery);
  }
}
