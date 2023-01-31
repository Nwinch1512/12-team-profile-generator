// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

export class Intern extends Employee {
  school;
  constructor(name, id, email, school) {
    super(name);
    super(id);
    super(email);
    this.school = school;
  }
  getName() {}
  getId() {}
  getEmail() {}
  getSchool() {}
  getRole() {
    return "Intern";
  }
}
