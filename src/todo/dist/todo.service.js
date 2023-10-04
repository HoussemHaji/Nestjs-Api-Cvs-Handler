"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TodoService = void 0;
var common_1 = require("@nestjs/common");
var todo_entity_1 = require("src/entities/todo.entity");
var TodoService = /** @class */ (function () {
    function TodoService() {
        this.todos = [];
    }
    TodoService.prototype.getTodos = function () {
        console.log('todo');
        return this.todos;
    };
    TodoService.prototype.getTodoById = function (id) {
        var todo = this.todos.find(function (actualTodo) { return actualTodo.id === +id; });
        if (todo)
            return todo;
        else
            throw new common_1.NotFoundException('todo Not Found');
    };
    TodoService.prototype.addTodo = function (newTodo) {
        var todo = new todo_entity_1.Todo();
        var name = newTodo.name, description = newTodo.description;
        todo.name = name;
        todo.description = description;
        if (this.todos.length) {
            todo.id = this.todos[this.todos.length - 1].id + 1;
        }
        else {
            todo.id = 1;
        }
        this.todos.push(todo);
        return todo;
    };
    TodoService.prototype.updateTodos = function (id, newTodo) {
        var todo = this.getTodoById(id);
        todo.name = newTodo.name ? newTodo.name : todo.name;
        todo.description = newTodo.description
            ? newTodo.description
            : todo.description;
        return todo;
    };
    TodoService.prototype.deleteTodo = function (id) {
        var index = this.todos.findIndex(function (actualTodo) { return actualTodo.id === +id; });
        if (index >= 0) {
            this.todos.splice(index, 1);
        }
        else
            throw new common_1.NotFoundException('todo not found');
        console.log('delete todo');
        return 'delete todo';
    };
    TodoService = __decorate([
        common_1.Injectable()
    ], TodoService);
    return TodoService;
}());
exports.TodoService = TodoService;
