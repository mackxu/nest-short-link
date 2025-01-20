import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class ShortLongMap {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 10,
    unique: true,
    comment: '短码',
  })
  shortCode: string;

  @Column({
    length: 255,
    comment: '原长链接',
  })
  longUrl: string;

  @CreateDateColumn()
  createTime: Date;
}
