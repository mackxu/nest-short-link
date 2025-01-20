import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ShortCode {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 10,
    comment: '短码',
  })
  code: string;

  @Column({
    comment: '0: 未使用 1: 已使用',
    default: false,
  })
  used: boolean;
}
