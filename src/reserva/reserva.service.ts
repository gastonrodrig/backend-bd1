import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Reserva } from './entities/reserva.entity';
import { DeepPartial, Repository } from 'typeorm';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { Vuelo } from 'src/vuelo/entities/vuelo.entity';
import { Pasajero } from 'src/pasajero/entities/pasajero.entity';
import { UpdateReservaDto } from './dto/update-reserva.dto';

@Injectable()
export class ReservaService {

    constructor(
        @InjectRepository(Reserva)
        private reservaRespository: Repository<Reserva>,
    ){}

    async create(tipoData: CreateReservaDto): Promise<Reserva[]> {
        const vuelo: DeepPartial<Vuelo> = {
            id_vuelo: tipoData.id_vuelo
        }
        if(!vuelo) throw new BadRequestException('Vuelo not found')

        const pasajero: DeepPartial<Pasajero> = {
            id_pasajero: tipoData.id_pasajero
        }
        if(!pasajero) throw new BadRequestException('Pasajero not found')

        const tipo_partial: DeepPartial<Reserva> = {
            vuelo: vuelo,
            pasajero: pasajero,
            fecha_reserva: tipoData.fecha_reserva,
            importe: tipoData.importe
        }
        await this.reservaRespository.save(tipo_partial)
        return this.findAll()
    }

    async findAll(): Promise<Reserva[]> {
        return this.reservaRespository.find({
            relations: {
                vuelo: true,
                pasajero: true
            }
        })
    }

    async findOneById(id_reserva: number): Promise<Reserva> {
        return this.reservaRespository.findOne({
            where: {
                id_reserva
            },
            relations: {
                vuelo: true,
                pasajero: true
            }
        })
    }

    async update(id_reserva: number, tipoData: UpdateReservaDto): Promise<Reserva[]> {
        const modelo = await this.reservaRespository.findOne({
            where: {
                id_reserva
            },
            relations: {
                vuelo: true,
                pasajero: true
            }
        })
        const vuelo: DeepPartial<Vuelo> = {
            id_vuelo: tipoData.id_vuelo
        }
        const pasajero: DeepPartial<Pasajero> = {
            id_pasajero: tipoData.id_pasajero
        }
        const modelo_partial: DeepPartial<Reserva> = {
            vuelo: vuelo,
            pasajero: pasajero,
            fecha_reserva: tipoData.fecha_reserva,
            importe: tipoData.importe
        }

        Object.keys(modelo_partial).forEach(key => {
            modelo[key] = modelo_partial[key];
        });

        await this.reservaRespository.save(modelo);

        return this.findAll();
    }

    async remove(id: number): Promise<Reserva[]> {
        await this.reservaRespository.delete(id);
        return this.findAll();
    }
}
