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
var http_1 = require("@angular/common/http");
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getPipelines = function () {
        return this.http.get('http://jsonplaceholder.typicode.com/users');
    };
    DataService.prototype.getData = function () {
        return this.http.get('http://jsonplaceholder.typicode.com/users');
    };
    DataService.prototype.generateReportTable = function (detailedReport) {
        return this.http.get('http://jsonplaceholder.typicode.com/users');
    };
    DataService.prototype.getReport = function (pipelineId) {
        return this.http.get('http://jsonplaceholder.typicode.com/users/' + pipelineId);
    };
    DataService.prototype.loadDetailedReport = function (path) {
        return this.http.get('http://jsonplaceholder.typicode.com/users/' + path);
    };
    DataService.prototype.extractDetailedReport = function (testResults) {
        return this.http.get('http://jsonplaceholder.typicode.com/users/' + testResults);
    };
    DataService.prototype.updateTestSuiteWiseResultsData = function (detailedReport) {
        return this.http.get('http://jsonplaceholder.typicode.com/users/' + detailedReport);
    };
    DataService.prototype.AddTestSuiteWithTestCase = function (result, testSuiteJsonObj) {
        return this.http.get('http://jsonplaceholder.typicode.com/users/');
    };
    DataService.prototype.AddTestCaseToTestSuite = function (index, result, testSuiteJsonObj) {
        return this.http.get('http://jsonplaceholder.typicode.com/users/');
    };
    DataService.prototype.convertToTimeFormat = function (milliSeconds) {
        return this.http.get('http://jsonplaceholder.typicode.com/users/');
    };
    DataService.prototype.convertToMilliSeconds = function (time) {
        return this.http.get('http://jsonplaceholder.typicode.com/users/');
    };
    DataService.prototype.toggleSuite = function (id) {
        return this.http.get('http://jsonplaceholder.typicode.com/users/');
    };
    DataService.prototype.getTestCaseStatusIcon = function (testCaseStatus) {
        return this.http.get('http://jsonplaceholder.typicode.com/users/');
    };
    DataService.prototype.sortTable = function (n) {
        return this.http.get('http://jsonplaceholder.typicode.com/users/');
    };
    DataService.prototype.AddSortTableIndicator = function (dir, tableHeader) {
        return this.http.get('http://jsonplaceholder.typicode.com/users/');
    };
    DataService.prototype.filterTable = function () {
        return this.http.get('http://jsonplaceholder.typicode.com/users/');
    };
    DataService.prototype.ExportToExcel = function () {
        return this.http.get('http://jsonplaceholder.typicode.com/users/');
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map