import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTableCellComponent } from './employee-table-cell.component';

describe('EmployeeTableCellComponent', () => {
  let component: EmployeeTableCellComponent;
  let fixture: ComponentFixture<EmployeeTableCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeTableCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeTableCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
