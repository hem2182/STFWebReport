import { Component, Input, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { SpinnerService } from './spinner.service';

@Component({
    selector: 'spinner',
    template: `
    <div *ngIf="show" class="loader">
      <img *ngIf="loadingImage" [src]="loadingImage" />
      <ng-content></ng-content>
    </div>
  `,
    styleUrls: ['./spinner.component.css'],
})
export class SpinnerComponent implements OnInit, OnDestroy {
    @Input() name: string;
    @Input() group: string;
    @Input() loadingImage: string = "../../../Content/loader2.gif";
    //@Input() show = false;
    private isShowing = false;
    
    constructor(private spinnerService: SpinnerService) { }

    ngOnInit(): void {
        //if (!this.loadingImage) throw new Error("Spinner must have a loadingImage supplied.");
        if (!this.name) throw new Error("Spinner must have a 'name' attribute.");

        this.spinnerService._register(this);
    }

    

    @Input()
    get show(): boolean {
        return this.isShowing;
    }

    @Output() showChange = new EventEmitter();

    set show(val: boolean) {
        var that = this;
        this.isShowing = val;
        this.showChange.emit(this.isShowing);
    }


    ngOnDestroy(): void {
        this.spinnerService._unregister(this);
    }
}  