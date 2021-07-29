import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Posts {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column({type: "int"})
  up_votes: number;

  @Column({type: "int"})
  comments: number;

  @Column({type: "timestamp"})
  edited_at: Date;

  @Column({type: "timestamp"})
  created_at: Date;
}