import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
//Pipes
import { OrderByPipe } from './orderBy.pipe'
import { ExportToExcelPipe } from './exportToExcel.pipe'
import { FilterPipe } from './filterBy.pipe'
//Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './Dashboard/dashboard.component';
import { SpinnerComponent } from './Spinner/spinner.component';
import { ModalComponent } from './Modal/modal.component';
import { CustomModal } from './custom-model';
//Service
import { ExcelService } from './excel.service';
import { SpinnerService } from './Spinner/spinner.service';
import { ModalService } from './Modal/modal.service';
//import { ChartModule } from 'angular2-chartjs';
//import { DialogModule } from 'primeng/dialog';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

import { PopupModule } from 'ng2-opd-popup';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ChartsModule,
        ModalModule.forRoot(),
        BootstrapModalModule,
        PopupModule.forRoot()
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        SpinnerComponent,
        ModalComponent,
        CustomModal,
        OrderByPipe,
        ExportToExcelPipe,
        FilterPipe
    ],
    providers: [ExcelService, SpinnerService, ModalService],
    bootstrap: [AppComponent]
})
export class AppModule { }
