import { EmployeeName } from './employee-name.model';
import { Location } from './location.model';

export class Employee {
    name!: EmployeeName;
    gender!: string;
    email!: string;
    location!: Location;
    thumbnail!: string;

    get fullName() {
        if (this.name) {
            return `${this.name.title}. ${this.name.first} ${this.name.last}`;
        }

        return 'N/A';
    }

    get address() {
        if (this.location) {
            return `
                ${this.location.postcode},
                ${this.location.street} ${this.location.city},
                ${this.location.state} ${this.location.country}
            `.trim();
        }

        return 'N/A';
    }

    constructor(args?: Partial<Employee>) {
        Object.assign(this, args);
    }
}
