import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';

import { addTodoTdo } from './tdo/add_todo.dto';
import { TodoService } from './todo.service';
import { UpperAndFusionPipe } from 'src/pipes/upper-and-fusion/upper-and-fusion.pipe';
import { DurationInterceptor } from 'src/interseptors/duration/duration.interceptor';

@UseInterceptors(DurationInterceptor)
@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  getTodos() {
    console.log('todo');

    return this.todoService.getTodos();
  }

  @Get('/:id')
  getTodoById(@Param('id') id) {
    return this.todoService.getTodoById(+id);
  }

  @Post()
  addTodo(@Body() newTodo: addTodoTdo) {
    return this.todoService.addTodo(newTodo);
  }

  @Put('/:id')
  updateTodos(@Param('id') id, @Body() newTodo: Partial<addTodoTdo>) {
    return this.todoService.updateTodos(+id, newTodo);
  }

  @Delete('/:id')
  deleteTodo(@Param('id') id) {
    return this.todoService.deleteTodo(+id);
  }

  @Post('pipe')
  testPipe(@Body(UpperAndFusionPipe) data) {
    return data;
  }
}
