import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

type CellType = 'image' | 'address' | 'email' | 'common';

@Component({
    selector: 'app-employee-table-cell',
    templateUrl: './employee-table-cell.component.html',
    styleUrls: ['./employee-table-cell.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeTableCellComponent implements OnInit {
    @Input() value!: any;
    @Input() alt?: string;
    @Input() componentType: CellType = 'common';

    constructor() { }

    ngOnInit() {
    }
}
