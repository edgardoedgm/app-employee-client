import { Component, OnInit } from "@angular/core";
import { Result } from "./employee";
import { EmployeeService } from "./employee.service";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"],
})
export class EmployeeComponent implements OnInit {
  resultList: Result;
  searchText: string='';

  constructor(private employeeService: EmployeeService) {
    this.resultList = new Result();
  }



  ngOnInit() {
    this.employeeService
      .getEmployees()
      .subscribe((resultList) => (this.resultList = resultList));
  }
}
