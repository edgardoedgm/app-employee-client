import { Injectable } from "@angular/core";
import { Result } from "./employee";
import { Observable } from "rxjs";
import { of } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class EmployeeService {
  private url: string = "http://localhost:8080/employee/listar";
  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Result> {
    return this.http.get<Result>(this.url);
  }



}
