import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Vuelo } from '../../vuelo/entities/vuelo.entity';
import { Pasajero } from '../../pasajero/entities/pasajero.entity';

@Entity({ name: 'reserva' })
export class Reserva {
    @ApiProperty({ example: 1, description: 'Id Reserva' })
    @PrimaryGeneratedColumn()
    id_reserva: number

    @ApiProperty({ example: 1, description: 'Id del Vuelo asociado' })
    @ManyToOne(() => Vuelo) // tipo de vuelo
    @JoinColumn({ name: 'id_vuelo' })
    id_vuelo: Vuelo // union con la entidad Vuelo

    @ApiProperty({ example: 1, description: 'Id del Pasajero asociado' })
    @ManyToOne(() => Pasajero) // tipo de union
    @JoinColumn({ name: 'id_pasajero' })
    id_pasajero: Pasajero // union con la entidad Pasajero

    @ApiProperty({ example: '2024-06-20', description: 'Fecha de la reserva' })
    @Column({ type: 'date' })
    fecha_reserva: Date

    @ApiProperty({ example: 100, description: 'Importe de la reserva' })
    @Column({ type: 'integer' })
    importe: number
}