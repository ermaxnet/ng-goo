export class Location {
    city!: string;
    country!: string;
    postcode!: string;
    state!: string;
    street!: string;

    constructor(args?: Partial<Location>) {
        Object.assign(this, args);
    }
}
