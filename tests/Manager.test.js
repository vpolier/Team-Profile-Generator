// using Manager constructor
const Manager = require("../src/Manager");

//create manager object
test("creates an Manager object", () => {
    const manager = new manager("Vanessa", 90, "vpolier@hotmail.com", 4);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

//gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager("Vanessa", 90, "vpolier@hotmail.com", "vpolier81");

    expect(manager.getRole()).toEqual("Manager");
});