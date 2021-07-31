import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Posts {

  @Column()
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column({type: "int"})
  ups: number;

  @Column({type: "int"})
  comments: number;

  @Column({type: "timestamp"})
  created_at: Date;
}