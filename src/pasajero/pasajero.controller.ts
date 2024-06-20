import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PasajeroService } from './pasajero.service';
import { CreatePasajeroDto } from './dto/create-pasajero.dto';
import { Pasajero } from './entities/pasajero.entity';
import { UpdatePasajeroDto } from './dto/update-pasajero.dto';

@ApiTags('Pasajero')
@Controller('pasajero')
export class PasajeroController {
    constructor(private readonly pasajeroService: PasajeroService) {}

    @Post()
    create(@Body() createPasajeroDto: CreatePasajeroDto) {
        return this.pasajeroService.create(createPasajeroDto)
    }

    @Get()
    findAll() : Promise<Pasajero[]> {
        return this.pasajeroService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) : Promise<Pasajero>{
        return this.pasajeroService.findOne(+id);
    }

    @Put(':id')
        update(@Param('id') id: string, @Body() updatePasajeroDto: UpdatePasajeroDto) {
        return this.pasajeroService.update(+id, updatePasajeroDto);
    }

    @Delete(':id')
        remove(@Param('id') id: string) {
        return this.pasajeroService.remove(+id);
    }
}
