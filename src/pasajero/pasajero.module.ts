import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pasajero } from './entities/pasajero.entity';
import { PasajeroController } from './pasajero.controller';
import { PasajeroService } from './pasajero.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pasajero])],
  controllers: [PasajeroController],
  providers: [PasajeroService]
})
export class PasajeroModule {}
