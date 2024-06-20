import { ApiProperty } from "@nestjs/swagger"
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: 'vuelo' })
export class Vuelo {
    @ApiProperty({ example: 1, description: 'Id Vuelo' })
    @PrimaryGeneratedColumn()
    id_vuelo: number;
  
    @ApiProperty({ example: 'New York', description: 'Destino del vuelo' })
    @Column({ type: 'char', length: 30 })
    destino: string;
  
    @ApiProperty({ example: '2024-06-20', description: 'Fecha del vuelo' })
    @Column({ type: 'date' })
    fecha: Date;
}