"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var OrderByPipe = /** @class */ (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (records, args) {
        if (records && records.length > 0) {
            records.map(function (record) { return record['Column1'] = record.column; }); // add here
            return records.sort(function (a, b) {
                if (a[args.property] < b[args.property]) {
                    return -1 * args.direction;
                }
                else if (a[args.property] > b[args.property]) {
                    return 1 * args.direction;
                }
                else {
                    return 0;
                }
            });
        }
    };
    ;
    OrderByPipe = __decorate([
        core_1.Pipe({
            name: 'orderBy'
        })
    ], OrderByPipe);
    return OrderByPipe;
}());
exports.OrderByPipe = OrderByPipe;
//# sourceMappingURL=orderBy.pipe.js.map