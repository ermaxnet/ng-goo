import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';
import { Employee } from './models/employee.model';
import { EmployeeName } from './models/employee-name.model';
import { Location } from './models/location.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    names!: string[];
    acceptedNames = [];
    total = 5000;

    employees$!: Observable<Employee[]>;

    private readonly namesDB = [
        'Maksim',
        'Good Kat',
        'Patrick O\'Brian'
    ];
    private readonly onDestroy = new Subject();

    constructor(
        private readonly http: HttpClient
    ) {
        this.names = [ ...this.namesDB ];
    }

    ngOnInit() {
        this.employees$ = this.http.get(`https://randomuser.me/api/?results=${this.total}`, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        })
            .pipe(
                takeUntil(this.onDestroy),
                map((response: any) => response.results.map(employee => new Employee({
                    name: new EmployeeName(employee.name),
                    email: employee.email,
                    gender: employee.gender,
                    location: new Location({
                        city: employee.location.city,
                        country: employee.location.country,
                        postcode: String(employee.location.postcode),
                        state: employee.location.state,
                        street: employee.location.street.name
                    }),
                    thumbnail: employee.picture.thumbnail
                })))
            );
    }

    ngOnDestroy(): void {
        this.onDestroy.next();
        this.onDestroy.complete();
    }

    onDragStart(event: DragEvent) {
        const elem = event.target as HTMLElement;

        if (elem) {
        event.dataTransfer.setData(
            'text/plain',
            elem.attributes.getNamedItem('ng-reflect-name').value
        );
        }
    }

    onDragOver(event: DragEvent) {
        event.preventDefault();
    }

    onDrop(event: DragEvent) {
        const name = event.dataTransfer.getData('text');

        this.names = this.names.filter(na => na !== name);
        this.acceptedNames = [
        ...this.acceptedNames,
        name
        ];

        event.dataTransfer.clearData();
    }

    onClick() {
        this.names = [ ...this.namesDB ];
        this.acceptedNames = [];
    }
}
