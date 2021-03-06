import { AppConstantDatabase } from "src/app.constant";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { AuditoriaAgenciaEntity } from "./formularios/auditoria-agencia.entity";

@Entity('cliente')
export class ClienteEntity{
    @PrimaryGeneratedColumn()
    id? : number;
    
    @CreateDateColumn({
        name: 'fecha_hora_registro',
        type: 'timestamp without time zone'
    })
    fechaHoraRegistro? : Date;

    @UpdateDateColumn({
        name: 'fecha_hora_actualizacion',
        type: 'timestamp without time zone'
    })
    fechaHoraActualizacion? : Date;

    @Column({
        nullable: false,
        length: AppConstantDatabase.DB_COLUMN_TEXT_TAMANIO,
        name: 'cliente_nombre'
    })
    clienteNombre: string;

    @Column({nullable: false, default: AppConstantDatabase.DB_COLUMN_ESTADO_DEFAULT_ACTIVO})
    estado: number;

    @OneToMany(() => AuditoriaAgenciaEntity, evaluaFinc => evaluaFinc.cliente)
    auditoriaAgencia?: AuditoriaAgenciaEntity[];
}