import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Feedback {

    @PrimaryGeneratedColumn()
    id: string

    @Column()
    author: string

    @Column()
    target: string

    @Column({ nullable: true, default: 0 })
    author_nusp_cnpj: string

    @Column({ nullable: true, default: 0 })
    target_nusp_cnpj: string

    @Column('int', { nullable: true, array: true })
    answers: number[]

    @Column()
    comments: string

}
