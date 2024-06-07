import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("tasks")
export class Task extends BaseEntity {

  @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "text", nullable: false })
    title!: string;

    @Column({ type: "text", nullable: false })
    description!: string;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    created_at!: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
    updated_at!: Date;
}