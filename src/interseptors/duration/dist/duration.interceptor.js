"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DurationInterceptor = void 0;
var common_1 = require("@nestjs/common");
var rxjs_1 = require("rxjs");
var DurationInterceptor = /** @class */ (function () {
    function DurationInterceptor() {
    }
    DurationInterceptor.prototype.intercept = function (context, next) {
        var dateIn = Date.now();
        console.log('Request created at : ', dateIn);
        return next.handle().pipe(rxjs_1.tap(function () {
            var dateOut = Date.now();
            console.log('Request Ended at : ', dateOut);
            console.log("Request duration : " + (dateOut - dateIn) + " ms");
        }));
    };
    DurationInterceptor = __decorate([
        common_1.Injectable()
    ], DurationInterceptor);
    return DurationInterceptor;
}());
exports.DurationInterceptor = DurationInterceptor;
