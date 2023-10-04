import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserSubscribeDto } from './dto/user-subscribe.dto';
import { Repository } from 'typeorm';
import { UserEntity } from './enteties/user.entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login-credentials.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private userRepo: Repository<UserEntity>,
    private jwtService: JwtService
  ) {}
  async subscribe(user: UserSubscribeDto): Promise<UserEntity> {
    const newUser = this.userRepo.create({
      ...user,
    });
    newUser.salt = await bcrypt.genSalt();
    newUser.password = await bcrypt.hash(newUser.password, newUser.salt);
    try {
      return await this.userRepo.save(newUser);
    } catch (e) {
      throw new ConflictException('username and email must be unique');
    }
  }

  async getUsers(): Promise<Partial<UserEntity[]>> {
    return await this.userRepo.find();
  }

  async login(userCred: LoginDto) {
    const { username, password } = userCred;

    const user = await this.userRepo
      .createQueryBuilder('user')
      .where('user.username = :username or user.mail = :username', {
        username,
      })
      .getOne();
    console.log(user);
    if (!user) throw new NotFoundException('incorrect username');
    const hashedPass = await bcrypt.hash(password, user.salt);
    if (user.password === hashedPass) {
      const payload = await {
        username: user.username,
        mail: user.mail,
        role: user.role,
      };
      const jwt = await this.jwtService.sign(payload);
      return {
        access_token: jwt,
      };
    } else throw new NotFoundException('incorrect username or password ');
  }
}
