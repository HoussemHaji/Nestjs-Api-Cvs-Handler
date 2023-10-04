import { TimeStampEntities } from 'src/Generics/timestamp.entities';
import { UserEntity } from 'src/user/enteties/user.entity/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cv')
export class CvEntity extends TimeStampEntities {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  firstname: string;
  @Column()
  age: number;
  @Column()
  cin: number;
  @Column()
  job: string;
  @Column()
  path: string;

  @ManyToOne(() => UserEntity, (user) => user.cvs, {
    cascade: ['insert', 'update'],
    nullable: true,
    eager: true,
  })
  user: UserEntity;
}
