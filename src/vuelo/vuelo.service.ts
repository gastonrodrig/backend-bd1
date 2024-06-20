import { Injectable } from '@nestjs/common';
import { CreateVueloDto } from './dto/create-vuelo.dto';
import { UpdateVueloDto } from './dto/update-vuelo.dto';
import { Vuelo } from './entities/vuelo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class VueloService {

  constructor(
    @InjectRepository(Vuelo)
    private vueloRepository: Repository<Vuelo>,
  ){}

  async create(createVueloDto: CreateVueloDto): Promise<Vuelo[]> {
    const vuelo = this.vueloRepository.create(createVueloDto)
    await this.vueloRepository.save(vuelo)
    return this.findAll()
  }

  findAll(): Promise<Vuelo[]> {
    return this.vueloRepository.find();
  }

  findOne(id_vuelo: number): Promise<Vuelo> {
    return this.vueloRepository.findOne({
      where: {
        id_vuelo
      }
    })
  }

  async update(id_vuelo: number, updateVueloDto: UpdateVueloDto): Promise<Vuelo[]> {
    const vuelo = await this.vueloRepository.findOne({
      where: {
        id_vuelo
      }
    })
    Object.keys(updateVueloDto).forEach(key => {
      vuelo[key] = updateVueloDto[key];
    });
    await this.vueloRepository.save(vuelo);
    return this.findAll()
  }

  async remove(id: number): Promise<Vuelo[]> {
    await this.vueloRepository.delete(id);
    return this.findAll();
  }
}