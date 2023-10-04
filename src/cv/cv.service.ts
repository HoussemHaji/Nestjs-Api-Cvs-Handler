import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { CvEntity } from './entities/cv.entity/cv.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AddCvDto } from './dto/add-cv.dto';
import { UpdateCvDto } from './dto/update-cv.dto';
import { userRoleEnum } from 'src/enums/user-role.enum';

@Injectable()
export class CvService {
  constructor(
    @InjectRepository(CvEntity)
    private cvRepository: Repository<CvEntity>
  ) {}
  async getCv(user): Promise<CvEntity[]> {
    if (user.role === userRoleEnum.ADMIN) return await this.cvRepository.find();
    else
      return await this.cvRepository.find({
        where: { user: { id: user.id } },
      });
  }
  async addCv(cv: AddCvDto, user): Promise<CvEntity> {
    const newCv = this.cvRepository.create(cv);
    newCv.user = user;
    return await this.cvRepository.save(newCv);
  }

  async findById(id: number, user): Promise<Partial<CvEntity>> {
    const cv = await this.cvRepository.findOneBy({ id: id });

    if (!cv) throw new NotFoundException('Cv Not Found');
    else {
      if (user.role === userRoleEnum.ADMIN || cv.user.id === user.id) return cv;
      else throw new UnauthorizedException();
    }
  }

  async updateCv(id: number, cv: UpdateCvDto): Promise<CvEntity> {
    const newCv = await this.cvRepository.preload({
      id,
      ...cv,
    });
    if (newCv) return await this.cvRepository.save(newCv);
    else throw new NotFoundException('Cv not Found');
  }
  async deleteCv(id: number, user) {
    const cv = this.cvRepository.findOneBy({ id: id });
    if (user.role === userRoleEnum.ADMIN || user.id === (await cv).user.id)
      return await this.cvRepository.delete(id);
    else throw new UnauthorizedException();
  }

  async softDeleteCv(id: number) {
    return this.cvRepository.softDelete(id);
  }

  async restoreCv(id: number) {
    return this.cvRepository.restore(id);
  }

  async cvNumberByAge() {
    const qb = this.cvRepository.createQueryBuilder('cv');
    return await qb
      .select('cv.age, count(cv.id)')
      .groupBy('cv.age')
      .getRawMany();
  }
}
