"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddCvDto = void 0;
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var AddCvDto = /** @class */ (function () {
    function AddCvDto() {
    }
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString()
    ], AddCvDto.prototype, "name");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString()
    ], AddCvDto.prototype, "firstname");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_transformer_1.Type(function () { return Number; }),
        class_validator_1.IsNumber(),
        class_validator_1.Min(15),
        class_validator_1.Max(65)
    ], AddCvDto.prototype, "age");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_transformer_1.Type(function () { return Number; }),
        class_validator_1.IsNumber()
    ], AddCvDto.prototype, "cin");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString()
    ], AddCvDto.prototype, "job");
    __decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsString()
    ], AddCvDto.prototype, "path");
    return AddCvDto;
}());
exports.AddCvDto = AddCvDto;
