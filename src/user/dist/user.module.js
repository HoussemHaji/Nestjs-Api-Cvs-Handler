"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserModule = void 0;
var common_1 = require("@nestjs/common");
var user_controller_1 = require("./user.controller");
var user_service_1 = require("./user.service");
var typeorm_1 = require("@nestjs/typeorm");
var user_entity_1 = require("./enteties/user.entity/user.entity");
var passport_1 = require("@nestjs/passport");
var jwt_1 = require("@nestjs/jwt");
var dotenv = require("dotenv");
var passport_jwt_strategy_1 = require("./strategies/passport-jwt.strategy");
dotenv.config();
var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        common_1.Module({
            imports: [
                typeorm_1.TypeOrmModule.forFeature([user_entity_1.UserEntity]),
                passport_1.PassportModule.register({
                    defaultStrategy: 'jwt'
                }),
                jwt_1.JwtModule.register({
                    secret: process.env.SECRET,
                    signOptions: {
                        expiresIn: 3600
                    }
                }),
            ],
            controllers: [user_controller_1.UserController],
            providers: [user_service_1.UserService, passport_jwt_strategy_1.JwtStrategy]
        })
    ], UserModule);
    return UserModule;
}());
exports.UserModule = UserModule;
