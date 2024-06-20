import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { VueloService } from './vuelo.service';
import { CreateVueloDto } from './dto/create-vuelo.dto';
import { UpdateVueloDto } from './dto/update-vuelo.dto';
import { Vuelo } from './entities/vuelo.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Vuelo')
@Controller('vuelo')
export class VueloController {
  constructor(private readonly vueloService: VueloService) {}

  @Post()
  create(@Body() createVueloDto: CreateVueloDto): Promise<Vuelo[]> {
    return this.vueloService.create(createVueloDto);
  }

  @Get()
  findAll() : Promise<Vuelo[]>{
    return this.vueloService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) : Promise<Vuelo>{
    return this.vueloService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateVueloDto: UpdateVueloDto) {
    return this.vueloService.update(+id, updateVueloDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vueloService.remove(+id);
  }
}