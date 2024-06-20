import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'pasajero' })
export class Pasajero {
    @ApiProperty({ example: 1, description: 'Id Pasajero' })
    @PrimaryGeneratedColumn()
    id_pasajero: number

    @ApiProperty({ example: 'John Doe', description: 'Nombre del pasajero' })
    @Column({ type: 'char', length: 30 })
    nombre: string

    @ApiProperty({ example: 'AB123456', description: 'Número de pasaporte' })
    @Column({ type: 'char', length: 30 })
    pasaporte: string

    @ApiProperty({ example: '1980-01-01', description: 'Fecha de nacimiento' })
    @Column({ type: 'date' })
    fecha_nacimiento: Date
}