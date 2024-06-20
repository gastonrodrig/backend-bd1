import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VueloModule } from './vuelo/vuelo.module';
import { ReservaModule } from './reserva/reserva.module';
import { PasajeroModule } from './pasajero/pasajero.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10),
      password: process.env.DATABASE_PASSWORD,
      username: process.env.DATABASE_USERNAME,
      entities: [__dirname + '/*/.entity{.ts,.js}'],
      database: process.env.DATABASE_NAME,
      synchronize: true,
      ssl: {
        rejectUnauthorized: false
      }
    }),
    VueloModule,
    ReservaModule,
    PasajeroModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}