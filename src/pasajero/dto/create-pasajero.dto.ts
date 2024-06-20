import { ApiProperty } from "@nestjs/swagger"

export class CreatePasajeroDto {
    @ApiProperty({ example: 'John Doe', description: 'Nombre del pasajero' })
    nombre: string

    @ApiProperty({ example: 'AB123456', description: 'Número de pasaporte' })
    pasaporte: string

    @ApiProperty({ example: '1980-01-01', description: 'Fecha de nacimiento' })
    fecha_nacimiento: Date
}
