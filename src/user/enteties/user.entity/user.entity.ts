import { TimeStampEntities } from 'src/Generics/timestamp.entities';
import { CvEntity } from 'src/cv/entities/cv.entity/cv.entity';
import { userRoleEnum } from 'src/enums/user-role.enum';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserEntity extends TimeStampEntities {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, unique: true })
  username: string;

  @Column()
  password: string;

  @Column()
  salt: string;

  @Column({
    type: 'enum',
    enum: userRoleEnum,
    default: userRoleEnum.USER,
  })
  role: string;

  @Column({ unique: true })
  mail: string;

  @OneToMany(() => CvEntity, (cv) => cv.user, {
    nullable: true,
    cascade: true,
  })
  cvs: CvEntity[];
}
