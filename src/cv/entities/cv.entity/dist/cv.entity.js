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
exports.CvEntity = void 0;
var timestamp_entities_1 = require("src/Generics/timestamp.entities");
var user_entity_1 = require("src/user/enteties/user.entity/user.entity");
var typeorm_1 = require("typeorm");
var CvEntity = /** @class */ (function (_super) {
    __extends(CvEntity, _super);
    function CvEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], CvEntity.prototype, "id");
    __decorate([
        typeorm_1.Column()
    ], CvEntity.prototype, "name");
    __decorate([
        typeorm_1.Column()
    ], CvEntity.prototype, "firstname");
    __decorate([
        typeorm_1.Column()
    ], CvEntity.prototype, "age");
    __decorate([
        typeorm_1.Column()
    ], CvEntity.prototype, "cin");
    __decorate([
        typeorm_1.Column()
    ], CvEntity.prototype, "job");
    __decorate([
        typeorm_1.Column()
    ], CvEntity.prototype, "path");
    __decorate([
        typeorm_1.ManyToOne(function () { return user_entity_1.UserEntity; }, function (user) { return user.cvs; }, {
            cascade: ['insert', 'update'],
            nullable: true,
            eager: true
        })
    ], CvEntity.prototype, "user");
    CvEntity = __decorate([
        typeorm_1.Entity('cv')
    ], CvEntity);
    return CvEntity;
}(timestamp_entities_1.TimeStampEntities));
exports.CvEntity = CvEntity;
