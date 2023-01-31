// TODO: Write code to define and export the Employee class

export class Employee {
  name;
  id;
  email;
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {}
  getId() {}
  getEmail() {}
  getRole() {
    return "Employee";
  }
}
