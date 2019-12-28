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
var excel_service_1 = require("../excel.service");
var spinner_service_1 = require("../Spinner/spinner.service");
var filterBy_pipe_1 = require("../filterBy.pipe");
var modal_service_1 = require("../Modal/modal.service");
require("chartjs-plugin-labels");
var bootstrap_1 = require("angular2-modal/plugins/bootstrap");
var ng2_opd_popup_1 = require("ng2-opd-popup");
var DashboardComponent = /** @class */ (function () {
    //showSpinner = false;
    //spinnerShowing = false;
    //data: any = [
    //    { eid: 'e101', ename: 'ravi', esal: 1000 },
    //    { eid: 'e102', ename: 'ram', esal: 2000 },
    //    { eid: 'e103', ename: 'rajesh', esal: 3000 }
    //];
    //data = [
    //    {
    //        key: "Sample Header 1", value: [
    //            { col1: "manish", col2: "1234", col3: "c1", col4: "d1", col5: "e1" },
    //            { col1: "prateek", col2: "1123", col3: "c2", col4: "d2", col5: "e2" },
    //            { col1: "iltafur", col2: "1342", col3: "c3", col4: "d3", col5: "e3" },
    //            { col1: "bhawna", col2: "1111", col3: "c4", col4: "d4", col5: "e4" },
    //            { col1: "paramveer", col2: "1897", col3: "c5", col4: "d5", col5: "e5" }]
    //    },
    //    {
    //        key: "Sample Header 2", value: [
    //            { col1: "harshit", col2: "1789", col3: "c1", col4: "d1", col5: "e1" },
    //            { col1: "shubham", col2: "1254", col3: "c2", col4: "d2", col5: "e2" },
    //            { col1: "sachin", col2: "1190", col3: "c3", col4: "d3", col5: "e3" },
    //            { col1: "priyanka", col2: "1564", col3: "c4", col4: "d4", col5: "e4" },
    //            { col1: "dastaan", col2: "1326", col3: "c5", col4: "d5", col5: "e5" }]
    //    }
    //]
    function DashboardComponent(_excelService, _filter, _spinner, modalService, modal, popup) {
        this._excelService = _excelService;
        this._filter = _filter;
        this._spinner = _spinner;
        this.modalService = modalService;
        this.modal = modal;
        this.popup = popup;
        this.name = 'Angular';
        this.noDisplay = false;
        this.isDesc = false;
        //Chart Related Code
        this.pieChartLabels = ['Passed', 'Failed', 'Active', 'NotExecuted', 'Aborted'];
        this.pieChartData = [300, 100, 33, 150, 125];
        this.pieChartColors = [
            {
                backgroundColor: [
                    'rgba(110, 114, 20, 1)',
                    'rgba(118, 183, 172, 1)',
                    'rgba(0, 148, 97, 1)',
                    'rgba(129, 78, 40, 1)',
                    'rgba(129, 199, 111, 1)'
                ]
            }
        ];
        this.piechartOptions = {
            plugins: {
                labels: {
                    render: 'label',
                    fontSize: 14,
                    fontStyle: 'bold',
                    fontColor: '#000',
                    precision: 2
                }
            }
        };
        this.pieChartType = 'pie';
    }
    DashboardComponent.prototype.ngOnInit = function () {
        //if (!this.loadingImage) throw new Error("Spinner must have a loadingImage supplied.");
        //this._spinner.show("mySpinner");
    };
    DashboardComponent.prototype.ClickButton = function () {
        this.popup.options = {
            header: "Your custom header",
            color: "#5cb85c",
            widthProsentage: 40,
            animationDuration: 1,
            showButtons: true,
            confirmBtnContent: "OK",
            cancleBtnContent: "Cancel",
            confirmBtnClass: "btn btn-default",
            cancleBtnClass: "btn btn-default",
            animation: "fadeInDown" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown'
        };
        this.popup.show(this.popup.options);
    };
    DashboardComponent.prototype.YourConfirmEvent = function () {
        alert('You cliked confirm');
    };
    DashboardComponent.prototype.YourCancelEvent = function () {
        alert('You cliked cancel');
    };
    DashboardComponent.prototype.dialog = function () {
        this.modal.alert()
            .size('lg')
            .showClose(true)
            .title('A simple Alert style modal window')
            .body("\n            <h4>Alert is a classic (title/body/footer) 1 button modal window that \n            does not block.</h4>\n            <b>Configuration:</b>\n            <ul>\n                <li>Non blocking (click anywhere outside to dismiss)</li>\n                <li>Size large</li>\n                <li>Dismissed with default keyboard key (ESC)</li>\n                <li>Close wth button click</li>\n                <li>HTML content</li>\n            </ul>")
            .open();
    };
    DashboardComponent.prototype.openModal = function (id) {
        this.modalService.open(id);
    };
    DashboardComponent.prototype.closeModal = function (id) {
        this.modalService.close(id);
    };
    DashboardComponent.prototype.sort = function (property) {
        this.isDesc = !this.isDesc; //change the direction    
        this.column = property;
        this.direction = this.isDesc ? 1 : -1;
        console.log(property);
    };
    ;
    DashboardComponent.prototype.exportAsXLSX = function (tdata) {
        //var that = this;
        //console.log("Data Before Applying search Filter:");
        //console.log(tdata); 
        ////console.log(this.tableData);
        //console.log(this.searchString);
        //tdata.forEach(function (data) {
        //    data.value = that._filter.transform(data.value, "col1", that.searchString);
        //});
        //console.log("Data After Applying search Filter:"); 
        //console.log(tdata);
        //this._excelService.exportToExcel(tdata);
        this._spinner.show("mySpinner");
    };
    DashboardComponent.prototype.hideSpinner = function () {
        this._spinner.hide("mySpinner");
    };
    DashboardComponent.prototype.Submit = function (empForm) {
        console.log(empForm.value);
    };
    // events
    DashboardComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    DashboardComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            templateUrl: 'app/dashboard/dashboard.component.html',
            styleUrls: ['app/dashboard/dashboard.component.css'],
            providers: [excel_service_1.ExcelService, filterBy_pipe_1.FilterPipe, spinner_service_1.SpinnerService, modal_service_1.ModalService, bootstrap_1.Modal]
        }),
        __metadata("design:paramtypes", [excel_service_1.ExcelService, filterBy_pipe_1.FilterPipe, spinner_service_1.SpinnerService,
            modal_service_1.ModalService, bootstrap_1.Modal, ng2_opd_popup_1.Popup])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map