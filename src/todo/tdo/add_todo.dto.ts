import { IsNotEmpty, IsString } from 'class-validator';

export class addTodoTdo {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
