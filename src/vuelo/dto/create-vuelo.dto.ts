import { ApiProperty } from "@nestjs/swagger"

export class CreateVueloDto {

    @ApiProperty({ example: 'New York', description: 'Destino del vuelo' })
    destino: string;

    @ApiProperty({ example: '2024-06-20', description: 'Fecha del vuelo' })
    fecha: Date;
}
