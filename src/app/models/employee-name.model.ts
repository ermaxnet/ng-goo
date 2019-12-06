export class EmployeeName {
    first!: string;
    last!: string;
    title!: string;

    constructor(args?: Partial<EmployeeName>) {
        Object.assign(this, args);
    }
}
