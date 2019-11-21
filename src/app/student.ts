export class Student {
  studentName: string;
  address: string;
  email: string;
  gender: string;
  hobby: Array<string>;

  constructor() {
    this.studentName = "";
    this.address = "";
    this.email = "";
    this.gender = "";
    this.hobby = [];
  }
}
