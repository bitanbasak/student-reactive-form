import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators, FormArray } from "@angular/forms";
import { Student } from "./student";

import { StudentsService } from "./students.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [StudentsService]
})
export class AppComponent implements OnInit {
  errMessage = "";
  studentRegisterForm: FormGroup;
  studentData: Student = new Student();
  studentArray: Array<Student> = [];

  constructor(private studentsService: StudentsService) {}

  ngOnInit() {
    this.fetchStudent();
    this.studentRegisterForm = new FormGroup({
      studentName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      address: new FormControl(null, Validators.required),
      gender: new FormControl("Male", Validators.required),
      hobby: new FormArray([])
    });
  }

  onSubmit() {
    this.studentData = this.studentRegisterForm.value;
    this.studentsService.addStudent(this.studentData).subscribe(
      data => this.studentArray.push(data),
      error => (this.errMessage = error.message)
    );
  }
  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.studentRegisterForm.get("hobby")).push(control);
  }

  fetchStudent() {
    this.studentsService.getStudents().subscribe(
      data => (this.studentArray = data),
      error => (this.errMessage = error.message)
    );
  }

  deleteStudent(id: number) {
    this.studentsService.deleteStudent(id).subscribe(
      data => this.fetchStudent(),
      error => (this.errMessage = error.message)
    );
  }
}
