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
var Excel = require("exceljs");
var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
var EXCEL_EXTENSION = '.xlsx';
var ExcelService = /** @class */ (function () {
    function ExcelService() {
        //blobType: string = "text/plain;charset=utf-8";
        this.blobType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        this.cols = ['Column1', 'Column2', 'Column3', 'Column4', 'Column5'];
        this.sName = 'SheetTest';
        this.excelFileName = 'sample.xlsx';
    }
    ExcelService.prototype.exportToExcel = function (data) {
        var _this = this;
        var workbook = new Excel.Workbook();
        workbook.creator = 'Web';
        workbook.lastModifiedBy = 'Web';
        workbook.created = new Date();
        workbook.modified = new Date();
        workbook.addWorksheet(this.sName, { views: [{ state: 'frozen', ySplit: 3, xSplit: 2, activeCell: 'A1', showGridLines: false }] });
        var sheet = workbook.getWorksheet(1);
        var head1 = ["Exported Data"];
        sheet.addRow(head1);
        sheet.addRow("");
        sheet.getRow(3).values = this.cols;
        sheet.columns = [
            { key: 'col1' },
            { key: 'col2' },
            { key: 'col3' },
            { key: 'col4' },
            { key: 'col5' }
        ];
        for (var i = 0; i < data.length; i++) {
            sheet.addRow({ col1: data[i].key });
            sheet.addRows(data[i].value);
        }
        workbook.xlsx.writeBuffer().then(function (d) {
            var blob = new Blob([d], { type: _this.blobType });
            var url = window.URL.createObjectURL(blob);
            var a = document.createElement("a");
            document.body.appendChild(a);
            a.href = url;
            a.download = _this.excelFileName;
            a.click();
            //adding some delay in removing the dynamically created link solves the problem in FireFox
            //setTimeout(function() {window.URL.revokeObjectURL(url);},0);
            //FileSaver.saveAs(blob, this.excelFileName, true);
        });
    };
    ExcelService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ExcelService);
    return ExcelService;
}());
exports.ExcelService = ExcelService;
//# sourceMappingURL=excel.service.js.map