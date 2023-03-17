// using Employee constructor
const Employee = require("../src/Employee");

//create employee object
test("creates an employee onject", () => {
    const employee = new Employee("Vanessa", 90, "vpolier@hotmail.com");

    expect(employee.name).toEqual(expect.any(string));
    expect(employee.Id).toEqual(expect.any(Number));
    expect(employee.Email).toEqual(expect.any(string));
    expect(employee.Role).toEqual(expect.any(string))
});

//gets name from getname()
test('get employee name', () => {
    const employee = new Employee("Vanessa", 90, "vpolier@hotmail.com");

    expect(employee.getName()).toEqual(expect.any(String));
});

//gets id from getId()
test('get employee ID', () => {
    const employee = new Employee("Vanessa", 90, "vpolier@hotmail.com");

    expect(employee.getID()).toEqual(expect.any(Number));
});

//gets id from getEmail
test('get employee email', () => {
    const employee = new Employee("Vanessa", 90, "vpolier@hotmail.com");

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

//gets role from getRole()
test('gets role of employee', () => {
    const emploryee = new Employee("Vanessa", 90, "vpolier@hotmail.com", "vpolier81");

    expect(employee.getRole()).toEqual("Employee");
});

