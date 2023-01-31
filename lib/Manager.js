// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

export class Manager extends Employee {
  officeNumber;
  constructor(name, id, email, officeNumber) {
    super(name);
    super(id);
    super(email);
    this.officeNumber = officeNumber;
  }
  getName() {}
  getId() {}
  getEmail() {}
  getRole() {
    return "Manager";
  }
}
