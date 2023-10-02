import { Repository, Entity, PrimaryGeneratedColumn, Column, DataSource } from "typeorm";

@Entity('administrator')
export class administratorEntity {
    @PrimaryGeneratedColumn()
    uid: number

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    dob: Date

    @Column()
    salary: number

    @Column()
    address: string
}
