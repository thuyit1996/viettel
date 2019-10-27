import { Component, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'app-sharing-data',
    templateUrl: './sharing-data.component.html',
    styleUrls: ['./sharing-data.component.scss']
})
export class SharingDataComponent implements OnChanges {
    @Input('id') id: string;
    @Input('type') type: string;
    constructor(
    ) { }

    ngOnChanges(): void {
        
    }
}
