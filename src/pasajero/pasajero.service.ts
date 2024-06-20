import { Injectable } from '@nestjs/common';
import { Pasajero } from './entities/pasajero.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePasajeroDto } from './dto/create-pasajero.dto';
import { UpdatePasajeroDto } from './dto/update-pasajero.dto';

@Injectable()
export class PasajeroService {

    constructor(
        @InjectRepository(Pasajero)
        private pasajeroRepository: Repository<Pasajero>
    ) {}

    async create(createPasajeroDto: CreatePasajeroDto): Promise<Pasajero[]> {
        const pasajero = this.pasajeroRepository.create(createPasajeroDto)
        await this.pasajeroRepository.save(pasajero)
        return this.findAll()
    }

    findAll(): Promise<Pasajero[]> {
        return this.pasajeroRepository.find();
    }

    findOne(id_pasajero: number): Promise<Pasajero> {
        return this.pasajeroRepository.findOne({
            where: {
                id_pasajero
            }
        })
    }

    async update(id_pasajero: number, updatePasajeroDto: UpdatePasajeroDto): Promise<Pasajero[]> {
        const pasajero = await this.pasajeroRepository.findOne({
            where: {
                id_pasajero
            }
        })
        Object.keys(updatePasajeroDto).forEach(key => {
            pasajero[key] = updatePasajeroDto[key]
        })
        await this.pasajeroRepository.save(pasajero)
        return this.findAll()
    }

    async remove(id: number): Promise<Pasajero[]> {
        await this.pasajeroRepository.delete(id);
        return this.findAll();
      }
}
