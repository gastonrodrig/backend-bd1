import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vuelo } from './entities/vuelo.entity';
import { VueloController } from './vuelo.controller';
import { VueloService } from './vuelo.service';

@Module({
  imports: [TypeOrmModule.forFeature([Vuelo])],
  controllers: [VueloController],
  providers: [VueloService]
})
export class VueloModule {}
