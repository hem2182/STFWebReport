"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SpinnerService = /** @class */ (function () {
    function SpinnerService() {
        this.spinnerCache = new Set();
    }
    SpinnerService.prototype._register = function (spinner) {
        this.spinnerCache.add(spinner);
        console.log(this.spinnerCache);
    };
    SpinnerService.prototype.show = function (spinnerName) {
        this.spinnerCache.forEach(function (spinner) {
            if (spinner.name === spinnerName) {
                spinner.show = true;
            }
        });
    };
    SpinnerService.prototype.hide = function (spinnerName) {
        this.spinnerCache.forEach(function (spinner) {
            if (spinner.name === spinnerName) {
                spinner.show = false;
            }
        });
    };
    SpinnerService.prototype.showGroup = function (spinnerGroup) {
        this.spinnerCache.forEach(function (spinner) {
            if (spinner.group === spinnerGroup) {
                spinner.show = true;
            }
        });
    };
    SpinnerService.prototype.hideGroup = function (spinnerGroup) {
        this.spinnerCache.forEach(function (spinner) {
            if (spinner.group === spinnerGroup) {
                spinner.show = false;
            }
        });
    };
    SpinnerService.prototype.showAll = function () {
        this.spinnerCache.forEach(function (spinner) { return spinner.show = true; });
    };
    SpinnerService.prototype.hideAll = function () {
        this.spinnerCache.forEach(function (spinner) { return spinner.show = false; });
    };
    SpinnerService.prototype.isShowing = function (spinnerName) {
        var showing = undefined;
        this.spinnerCache.forEach(function (spinner) {
            if (spinner.name === spinnerName) {
                showing = spinner.show;
            }
        });
        return showing;
    };
    SpinnerService.prototype._unregister = function (spinnerToRemove) {
        var _this = this;
        this.spinnerCache.forEach(function (spinner) {
            if (spinner === spinnerToRemove) {
                _this.spinnerCache.delete(spinner);
            }
        });
    };
    SpinnerService = __decorate([
        core_1.Injectable()
    ], SpinnerService);
    return SpinnerService;
}());
exports.SpinnerService = SpinnerService;
//# sourceMappingURL=spinner.service.js.map