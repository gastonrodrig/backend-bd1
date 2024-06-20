import { PartialType } from '@nestjs/swagger';
import { CreatePasajeroDto } from './create-pasajero.dto';

export class UpdatePasajeroDto extends PartialType(CreatePasajeroDto) {}
