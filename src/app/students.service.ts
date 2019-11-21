import { Student } from "./student";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class StudentsService {
  constructor(private httpClient: HttpClient) {}

  addStudent(student: Student): Observable<Student> {
    return this.httpClient.post<Student>(
      "http://localhost:3000/students",
      student
    );
  }

  getStudents(): Observable<Array<Student>> {
    return this.httpClient.get<Array<Student>>(
      "http://localhost:3000/students"
    );
  }

  deleteStudent(id: number): Observable<Student> {
    return this.httpClient.delete<Student>(
      `http://localhost:3000/students/${id}`
    );
  }

  getStudent(id: number): Observable<Student> {
    return this.httpClient.get<Student>(`http://localhost:3000/students/${id}`);
  }
}
