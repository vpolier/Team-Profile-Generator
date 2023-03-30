// using Employee constructor
const Employee = require("../lib/Employee");

//create employee object
test("creates an employee object", () => {
    const employee = new Employee("Vanessa", 90, "vpolier@hotmail.com");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

//gets name from getname()
test('get employee name', () => {
    const employee = new Employee("Vanessa", 90, "vpolier@hotmail.com");

    expect(employee.getName()).toEqual(expect.any(String));
});

//gets id from getId()
test('get employee ID', () => {
    const employee = new Employee("Vanessa", 90, "vpolier@hotmail.com");

    expect(employee.getId()).toEqual(expect.any(Number));
});

//gets id from getEmail
test('gets employee email', () => {
    const employee = new Employee("Vanessa", 90, "vpolier@hotmail.com");

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

//gets role from getRole()
test('gets role of employee', () => {
    const employee = new Employee("Vanessa", 90, "vpolier@hotmail.com", "vpolier81");

    expect(employee.getRole()).toEqual("Employee");
});