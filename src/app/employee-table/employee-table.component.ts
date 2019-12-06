import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
    selector: 'app-employee-table',
    templateUrl: './employee-table.component.html',
    styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {
    @Input() employees: Employee[];

    constructor() { }

    ngOnInit() {
    }

}
