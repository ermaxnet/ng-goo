import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoxComponent } from './box/box.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { EmployeeTableCellComponent } from './employee-table-cell/employee-table-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    EmployeeTableComponent,
    EmployeeTableCellComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
