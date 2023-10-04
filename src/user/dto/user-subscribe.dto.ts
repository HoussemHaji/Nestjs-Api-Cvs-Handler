import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserSubscribeDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  @IsEmail()
  mail: string;
}
