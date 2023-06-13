import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./footer/footer/footer.component";
import { MenuComponent } from "./header/menu/menu.component";
import { EmployeeComponent } from "./employee/employee/employee.component";
import { EmployeeService } from "./employee/employee/employee.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { SearchPipe } from './employee/employee/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    EmployeeComponent,
    SearchPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
