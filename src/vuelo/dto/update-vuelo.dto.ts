import { PartialType } from '@nestjs/swagger';
import { CreateVueloDto } from './create-vuelo.dto';

export class UpdateVueloDto extends PartialType(CreateVueloDto) {}
