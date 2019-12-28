"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var spinner_service_1 = require("./spinner.service");
var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent(spinnerService) {
        this.spinnerService = spinnerService;
        this.loadingImage = "../../../Content/loader2.gif";
        //@Input() show = false;
        this.isShowing = false;
        this.showChange = new core_1.EventEmitter();
    }
    SpinnerComponent.prototype.ngOnInit = function () {
        //if (!this.loadingImage) throw new Error("Spinner must have a loadingImage supplied.");
        if (!this.name)
            throw new Error("Spinner must have a 'name' attribute.");
        this.spinnerService._register(this);
    };
    Object.defineProperty(SpinnerComponent.prototype, "show", {
        get: function () {
            return this.isShowing;
        },
        set: function (val) {
            var that = this;
            this.isShowing = val;
            this.showChange.emit(this.isShowing);
        },
        enumerable: true,
        configurable: true
    });
    SpinnerComponent.prototype.ngOnDestroy = function () {
        this.spinnerService._unregister(this);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SpinnerComponent.prototype, "name", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SpinnerComponent.prototype, "group", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SpinnerComponent.prototype, "loadingImage", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], SpinnerComponent.prototype, "show", null);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], SpinnerComponent.prototype, "showChange", void 0);
    SpinnerComponent = __decorate([
        core_1.Component({
            selector: 'spinner',
            template: "\n    <div *ngIf=\"show\" class=\"loader\">\n      <img *ngIf=\"loadingImage\" [src]=\"loadingImage\" />\n      <ng-content></ng-content>\n    </div>\n  ",
            styleUrls: ['./spinner.component.css'],
        }),
        __metadata("design:paramtypes", [spinner_service_1.SpinnerService])
    ], SpinnerComponent);
    return SpinnerComponent;
}());
exports.SpinnerComponent = SpinnerComponent;
//# sourceMappingURL=spinner.component.js.map