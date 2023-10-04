"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.CvService = void 0;
var common_1 = require("@nestjs/common");
var cv_entity_1 = require("./entities/cv.entity/cv.entity");
var typeorm_1 = require("@nestjs/typeorm");
var user_role_enum_1 = require("src/enums/user-role.enum");
var CvService = /** @class */ (function () {
    function CvService(cvRepository) {
        this.cvRepository = cvRepository;
    }
    CvService.prototype.getCv = function (user) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(user.role === user_role_enum_1.userRoleEnum.ADMIN)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.cvRepository.find()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, this.cvRepository.find({
                            where: { user: { id: user.id } }
                        })];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CvService.prototype.addCv = function (cv, user) {
        return __awaiter(this, void 0, Promise, function () {
            var newCv;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newCv = this.cvRepository.create(cv);
                        newCv.user = user;
                        return [4 /*yield*/, this.cvRepository.save(newCv)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CvService.prototype.findById = function (id, user) {
        return __awaiter(this, void 0, Promise, function () {
            var cv;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cvRepository.findOneBy({ id: id })];
                    case 1:
                        cv = _a.sent();
                        if (!cv)
                            throw new common_1.NotFoundException('Cv Not Found');
                        else {
                            if (user.role === user_role_enum_1.userRoleEnum.ADMIN || cv.user.id === user.id)
                                return [2 /*return*/, cv];
                            else
                                throw new common_1.UnauthorizedException();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CvService.prototype.updateCv = function (id, cv) {
        return __awaiter(this, void 0, Promise, function () {
            var newCv;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cvRepository.preload(__assign({ id: id }, cv))];
                    case 1:
                        newCv = _a.sent();
                        if (!newCv) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.cvRepository.save(newCv)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: throw new common_1.NotFoundException('Cv not Found');
                }
            });
        });
    };
    CvService.prototype.deleteCv = function (id, user) {
        return __awaiter(this, void 0, void 0, function () {
            var cv, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        cv = this.cvRepository.findOneBy({ id: id });
                        _a = user.role === user_role_enum_1.userRoleEnum.ADMIN;
                        if (_a) return [3 /*break*/, 2];
                        _b = user.id;
                        return [4 /*yield*/, cv];
                    case 1:
                        _a = _b === (_c.sent()).user.id;
                        _c.label = 2;
                    case 2:
                        if (!_a) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.cvRepository["delete"](id)];
                    case 3: return [2 /*return*/, _c.sent()];
                    case 4: throw new common_1.UnauthorizedException();
                }
            });
        });
    };
    CvService.prototype.softDeleteCv = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.cvRepository.softDelete(id)];
            });
        });
    };
    CvService.prototype.restoreCv = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.cvRepository.restore(id)];
            });
        });
    };
    CvService.prototype.cvNumberByAge = function () {
        return __awaiter(this, void 0, void 0, function () {
            var qb;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        qb = this.cvRepository.createQueryBuilder('cv');
                        return [4 /*yield*/, qb
                                .select('cv.age, count(cv.id)')
                                .groupBy('cv.age')
                                .getRawMany()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CvService = __decorate([
        common_1.Injectable(),
        __param(0, typeorm_1.InjectRepository(cv_entity_1.CvEntity))
    ], CvService);
    return CvService;
}());
exports.CvService = CvService;
