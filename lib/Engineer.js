// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

export class Engineer extends Employee {
  github;
  constructor(name, id, email, github) {
    super(name);
    super(id);
    super(email);
    this.github = github;
  }
  getName() {}
  getId() {}
  getEmail() {}
  getGithub() {}
  getRole() {
    return "Engineer";
  }
}
