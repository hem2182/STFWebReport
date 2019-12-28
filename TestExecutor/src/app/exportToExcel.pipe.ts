import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
    name: 'exportToExcel'
})

export class ExportToExcelPipe implements PipeTransform {

    transform(records: Array<any>): any {
        if (records && records.length > 0) {

            //records.map(record => record['Column1'] = record.column); // add here

            //return records.sort(function (a, b) {
            //    if (a[args.property] < b[args.property]) {
            //        return -1 * args.direction;
            //    }
            //    else if (a[args.property] > b[args.property]) {
            //        return 1 * args.direction;
            //    }
            //    else {
            //        return 0;
            //    }
            //});
            console.log("Data in ExportToExcel Pipe:" + records.length);
            return records;
        }
    };
}