import { Injectable } from '@nestjs/common';
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
        private reservaRespository: Repository<Reserva>
    ) { }

    async create(tipoData: CreateReservaDto): Promise<Reserva[]> {
        const vuelo: DeepPartial<Vuelo> = {
            id_vuelo: tipoData.vuelo
        }
        const pasajero: DeepPartial<Pasajero> = {
            id_pasajero: tipoData.pasajero
        }
        const tipo_partial: DeepPartial<Reserva> = {
            id_vuelo: vuelo,
            id_pasajero: pasajero,
            fecha_reserva: tipoData.fecha_reserva,
            importe: tipoData.importe
        }
        await this.reservaRespository.save(tipo_partial)
        return this.findAll()
    }

    async findAll(): Promise<Reserva[]> {
        return this.reservaRespository.find({
            relations: {
                id_vuelo: true,
                id_pasajero: true
            }
        })
    }

    async findOneById(id_reserva: number): Promise<Reserva> {
        return this.reservaRespository.findOne({
            where: {
                id_reserva
            },
            relations: {
                id_vuelo: true,
                id_pasajero: true
            }
        })
    }

    async update(id_reserva: number, tipoData: UpdateReservaDto): Promise<Reserva[]> {
        const modelo = await this.reservaRespository.findOne({
            where: {
                id_reserva
            },
            relations: {
                id_vuelo: true,
                id_pasajero: true
            }
        })
        const vuelo: DeepPartial<Vuelo> = {
            id_vuelo: tipoData.vuelo
        }
        const pasajero: DeepPartial<Pasajero> = {
            id_pasajero: tipoData.pasajero
        }
        const modelo_partial: DeepPartial<Reserva> = {
            id_vuelo: vuelo,
            id_pasajero: pasajero,
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
