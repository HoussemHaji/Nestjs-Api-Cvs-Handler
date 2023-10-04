import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from 'src/entities/todo.entity';
import { addTodoTdo } from './tdo/add_todo.dto';

@Injectable()
export class TodoService {
  todos: Todo[] = [];
  getTodos() {
    console.log('todo');

    return this.todos;
  }
  getTodoById(id: number) {
    const todo = this.todos.find((actualTodo) => actualTodo.id === +id);
    if (todo) return todo;
    else throw new NotFoundException('todo Not Found');
  }

  addTodo(newTodo: addTodoTdo): Todo {
    const todo = new Todo();
    const { name, description } = newTodo;
    todo.name = name;
    todo.description = description;
    if (this.todos.length) {
      todo.id = this.todos[this.todos.length - 1].id + 1;
    } else {
      todo.id = 1;
    }
    this.todos.push(todo);

    return todo;
  }
  updateTodos(id: number, newTodo: Partial<addTodoTdo>) {
    const todo = this.getTodoById(id);
    todo.name = newTodo.name ? newTodo.name : todo.name;
    todo.description = newTodo.description
      ? newTodo.description
      : todo.description;
    return todo;
  }

  deleteTodo(id) {
    const index = this.todos.findIndex((actualTodo) => actualTodo.id === +id);
    if (index >= 0) {
      this.todos.splice(index, 1);
    } else throw new NotFoundException('todo not found');
    console.log('delete todo');
    return 'delete todo';
  }
}
