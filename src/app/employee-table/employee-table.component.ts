import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
    selector: 'app-employee-table',
    templateUrl: './employee-table.component.html',
    styleUrls: ['./employee-table.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeTableComponent implements OnInit {
    @Input() employees: Employee[];

    constructor() { }

    ngOnInit() {
    }

}
