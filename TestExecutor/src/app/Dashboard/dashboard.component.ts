import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ExcelService } from '../excel.service';
import { SpinnerService } from '../Spinner/spinner.service';
import { FilterPipe } from '../filterBy.pipe';
import { ModalService } from '../Modal/modal.service'
import 'chartjs-plugin-labels';

import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { CustomModalContext, CustomModal } from '../custom-model'

import { Popup } from 'ng2-opd-popup';

@Component({
    selector: 'app-dashboard',
    templateUrl: 'app/dashboard/dashboard.component.html',
    styleUrls: ['app/dashboard/dashboard.component.css'],
    providers: [ExcelService, FilterPipe, SpinnerService, ModalService, Modal]
})
export class DashboardComponent implements OnInit {
    name: string = 'Angular';
    column: string;
    direction: number;
    tableData: any[];
    noDisplay = false;
    isDesc = false;
    searchString: string;

    

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

    constructor(private _excelService: ExcelService, private _filter: FilterPipe, private _spinner: SpinnerService,
        private modalService: ModalService, public modal: Modal, private popup: Popup) { }

    ngOnInit(): void {
        //if (!this.loadingImage) throw new Error("Spinner must have a loadingImage supplied.");
        //this._spinner.show("mySpinner");

    }

    ClickButton() {

        this.popup.options = {
            header: "Your custom header",
            color: "#5cb85c", // red, blue....
            widthProsentage: 40, // The with of the popou measured by browser width
            animationDuration: 1, // in seconds, 0 = no animation
            showButtons: true, // You can hide this in case you want to use custom buttons
            confirmBtnContent: "OK", // The text on your confirm button
            cancleBtnContent: "Cancel", // the text on your cancel button
            confirmBtnClass: "btn btn-default", // your class for styling the confirm button
            cancleBtnClass: "btn btn-default", // you class for styling the cancel button
            animation: "fadeInDown" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown'
        };

        this.popup.show(this.popup.options);
    }

    YourConfirmEvent() {
        alert('You cliked confirm');
    }

    YourCancelEvent() {
        alert('You cliked cancel');
    }

    dialog() {
        this.modal.alert()
            .size('lg')
            .showClose(true)
            .title('A simple Alert style modal window')
            .body(`
            <h4>Alert is a classic (title/body/footer) 1 button modal window that 
            does not block.</h4>
            <b>Configuration:</b>
            <ul>
                <li>Non blocking (click anywhere outside to dismiss)</li>
                <li>Size large</li>
                <li>Dismissed with default keyboard key (ESC)</li>
                <li>Close wth button click</li>
                <li>HTML content</li>
            </ul>`)
            .open();
    }


    openModal(id: string) {
        this.modalService.open(id);
    }

    closeModal(id: string) {
        this.modalService.close(id);
    }

    sort(property: string) {
        this.isDesc = !this.isDesc; //change the direction    
        this.column = property;
        this.direction = this.isDesc ? 1 : -1;
        console.log(property);
    };

    exportAsXLSX(tdata: any[]): void {
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
    }
    hideSpinner() {
        this._spinner.hide("mySpinner")
    }

    Submit(empForm: NgForm): void {
        console.log(empForm.value);
    }

    //Chart Related Code
    public pieChartLabels: string[] = ['Passed', 'Failed', 'Active', 'NotExecuted', 'Aborted'];
    public pieChartData: number[] = [300, 100, 33, 150, 125];
    public pieChartColors = [
        {
            backgroundColor: [
                'rgba(110, 114, 20, 1)',
                'rgba(118, 183, 172, 1)',
                'rgba(0, 148, 97, 1)',
                'rgba(129, 78, 40, 1)',
                'rgba(129, 199, 111, 1)'
            ]
        }]
    public piechartOptions = {
        plugins: {
            labels: {
                render: 'label',
                fontSize: 14,
                fontStyle: 'bold',
                fontColor: '#000',
                precision: 2
            }
        }
    }
    public pieChartType: string = 'pie';
    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }
}
