import { ApiProperty } from "@nestjs/swagger"

export class CreateReservaDto {
    @ApiProperty({ example: 1, description: 'Id del Vuelo asociado' })
    vuelo: number

    @ApiProperty({ example: 1, description: 'Id del Pasajero asociado' })
    pasajero: number

    @ApiProperty({ example: '2024-06-20', description: 'Fecha de la reserva' })
    fecha_reserva: Date

    @ApiProperty({ example: 100, description: 'Importe de la reserva' })
    importe: number
}
