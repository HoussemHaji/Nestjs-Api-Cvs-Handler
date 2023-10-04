"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserEntity = void 0;
var timestamp_entities_1 = require("src/Generics/timestamp.entities");
var cv_entity_1 = require("src/cv/entities/cv.entity/cv.entity");
var user_role_enum_1 = require("src/enums/user-role.enum");
var typeorm_1 = require("typeorm");
var UserEntity = /** @class */ (function (_super) {
    __extends(UserEntity, _super);
    function UserEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], UserEntity.prototype, "id");
    __decorate([
        typeorm_1.Column({ length: 50, unique: true })
    ], UserEntity.prototype, "username");
    __decorate([
        typeorm_1.Column()
    ], UserEntity.prototype, "password");
    __decorate([
        typeorm_1.Column()
    ], UserEntity.prototype, "salt");
    __decorate([
        typeorm_1.Column({
            type: 'enum',
            "enum": user_role_enum_1.userRoleEnum,
            "default": user_role_enum_1.userRoleEnum.USER
        })
    ], UserEntity.prototype, "role");
    __decorate([
        typeorm_1.Column({ unique: true })
    ], UserEntity.prototype, "mail");
    __decorate([
        typeorm_1.OneToMany(function () { return cv_entity_1.CvEntity; }, function (cv) { return cv.user; }, {
            nullable: true,
            cascade: true
        })
    ], UserEntity.prototype, "cvs");
    UserEntity = __decorate([
        typeorm_1.Entity('user')
    ], UserEntity);
    return UserEntity;
}(timestamp_entities_1.TimeStampEntities));
exports.UserEntity = UserEntity;
