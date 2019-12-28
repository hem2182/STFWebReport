"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
var forms_1 = require("@angular/forms");
var ng2_charts_1 = require("ng2-charts");
//Pipes
var orderBy_pipe_1 = require("./orderBy.pipe");
var exportToExcel_pipe_1 = require("./exportToExcel.pipe");
var filterBy_pipe_1 = require("./filterBy.pipe");
//Components
var app_component_1 = require("./app.component");
var dashboard_component_1 = require("./Dashboard/dashboard.component");
var spinner_component_1 = require("./Spinner/spinner.component");
var modal_component_1 = require("./Modal/modal.component");
var custom_model_1 = require("./custom-model");
//Service
var excel_service_1 = require("./excel.service");
var spinner_service_1 = require("./Spinner/spinner.service");
var modal_service_1 = require("./Modal/modal.service");
//import { ChartModule } from 'angular2-chartjs';
//import { DialogModule } from 'primeng/dialog';
var angular2_modal_1 = require("angular2-modal");
var bootstrap_1 = require("angular2-modal/plugins/bootstrap");
var ng2_opd_popup_1 = require("ng2-opd-popup");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                ng2_charts_1.ChartsModule,
                angular2_modal_1.ModalModule.forRoot(),
                bootstrap_1.BootstrapModalModule,
                ng2_opd_popup_1.PopupModule.forRoot()
            ],
            declarations: [
                app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent,
                spinner_component_1.SpinnerComponent,
                modal_component_1.ModalComponent,
                custom_model_1.CustomModal,
                orderBy_pipe_1.OrderByPipe,
                exportToExcel_pipe_1.ExportToExcelPipe,
                filterBy_pipe_1.FilterPipe
            ],
            providers: [excel_service_1.ExcelService, spinner_service_1.SpinnerService, modal_service_1.ModalService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map