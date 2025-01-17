// src/webhook/entities/webhook.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Webhook {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  eventType: string;

  @Column('jsonb')
  payload: any;

  @CreateDateColumn()
  createdAt: Date;
}
