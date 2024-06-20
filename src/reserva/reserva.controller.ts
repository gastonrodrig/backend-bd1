import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { ReservaService } from './reserva.service';
import { Reserva } from './entities/reserva.entity';
import { UpdateReservaDto } from './dto/update-reserva.dto';

@ApiTags('Reserva')
@Controller('reserva')
export class ReservaController {
    constructor(private reservaService: ReservaService) {}

    @Post()
    create(@Body() createReservaDto: CreateReservaDto): Promise<Reserva[]> {
        return this.reservaService.create(createReservaDto);
    }

    @Get()
    findAll(): Promise<Reserva[]> {
        return this.reservaService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number): Promise<Reserva> {
        return this.reservaService.findOneById(id)
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateReservaDto: UpdateReservaDto) {
        return this.reservaService.update(+id, updateReservaDto);
    }
    
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.reservaService.remove(+id);
    }
}
