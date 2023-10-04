import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { Payload } from '../interfaces/payload';
import { Repository } from 'typeorm';
import { UserEntity } from '../enteties/user.entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

dotenv.config();
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UserEntity)
    private userRepo: Repository<UserEntity>
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.SECRET,
    });
  }

  async validate(payload: Payload) {
    const user = await this.userRepo.findOneBy({ username: payload.username });
    if (user) {
      const { password, salt, ...result } = user;
      return result;
    } else throw new UnauthorizedException();
  }
}
