import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as Excel from 'exceljs';
import * as ExcelProper from 'exceljs';


const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';

const EXCEL_EXTENSION = '.xlsx';

@Injectable()
export class ExcelService {
    //constructor() { }
    //public exportAsExcelFile(json: any[], excelFileName: string): void {

    //    const worksheet: xlsx.WorkSheet = xlsx.utils.json_to_sheet(json);

    //    const workbook: xlsx.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };

    //    const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });

    //    this.saveAsExcelFile(excelBuffer, excelFileName);
    //    //var blob = new Blob([data.blob()], { type: 'my-content-type' });
    //    //saveAs(blob, 'fileName.xyz');
    //}

    //private saveAsExcelFile(buffer: any, fileName: string): void {
    //    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });

    //    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    //}

    name: string;
    sName: string;
    excelFileName: string;
    //blobType: string = "text/plain;charset=utf-8";
    blobType: string = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    cols = ['Column1', 'Column2', 'Column3', 'Column4', 'Column5']
    constructor() {
        this.sName = 'SheetTest';
        this.excelFileName = 'sample.xlsx';
    }
    exportToExcel(data: any[]) {
        var workbook = new Excel.Workbook();
        workbook.creator = 'Web';
        workbook.lastModifiedBy = 'Web';
        workbook.created = new Date();
        workbook.modified = new Date();
        workbook.addWorksheet(this.sName, { views: [{ state: 'frozen', ySplit: 3, xSplit: 2, activeCell: 'A1', showGridLines: false }] })
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
        workbook.xlsx.writeBuffer().then(d => {
            var blob = new Blob([d], { type: this.blobType });
            var url = window.URL.createObjectURL(blob);
            var a = document.createElement("a");
            document.body.appendChild(a);
            a.href = url;
            a.download = this.excelFileName;
            a.click();
            //adding some delay in removing the dynamically created link solves the problem in FireFox
            //setTimeout(function() {window.URL.revokeObjectURL(url);},0);
            //FileSaver.saveAs(blob, this.excelFileName, true);
        });
        
    }
}