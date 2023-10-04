"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.TodoController = void 0;
var common_1 = require("@nestjs/common");
var upper_and_fusion_pipe_1 = require("src/pipes/upper-and-fusion/upper-and-fusion.pipe");
var duration_interceptor_1 = require("src/interseptors/duration/duration.interceptor");
var TodoController = /** @class */ (function () {
    function TodoController(todoService) {
        this.todoService = todoService;
    }
    TodoController.prototype.getTodos = function () {
        console.log('todo');
        return this.todoService.getTodos();
    };
    TodoController.prototype.getTodoById = function (id) {
        return this.todoService.getTodoById(+id);
    };
    TodoController.prototype.addTodo = function (newTodo) {
        return this.todoService.addTodo(newTodo);
    };
    TodoController.prototype.updateTodos = function (id, newTodo) {
        return this.todoService.updateTodos(+id, newTodo);
    };
    TodoController.prototype.deleteTodo = function (id) {
        return this.todoService.deleteTodo(+id);
    };
    TodoController.prototype.testPipe = function (data) {
        return data;
    };
    __decorate([
        common_1.Get()
    ], TodoController.prototype, "getTodos");
    __decorate([
        common_1.Get('/:id'),
        __param(0, common_1.Param('id'))
    ], TodoController.prototype, "getTodoById");
    __decorate([
        common_1.Post(),
        __param(0, common_1.Body())
    ], TodoController.prototype, "addTodo");
    __decorate([
        common_1.Put('/:id'),
        __param(0, common_1.Param('id')), __param(1, common_1.Body())
    ], TodoController.prototype, "updateTodos");
    __decorate([
        common_1.Delete('/:id'),
        __param(0, common_1.Param('id'))
    ], TodoController.prototype, "deleteTodo");
    __decorate([
        common_1.Post('pipe'),
        __param(0, common_1.Body(upper_and_fusion_pipe_1.UpperAndFusionPipe))
    ], TodoController.prototype, "testPipe");
    TodoController = __decorate([
        common_1.UseInterceptors(duration_interceptor_1.DurationInterceptor),
        common_1.Controller('todo')
    ], TodoController);
    return TodoController;
}());
exports.TodoController = TodoController;
