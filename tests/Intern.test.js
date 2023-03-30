// using Intern constructor
const Intern = require("../lib/Intern");

//create Intern object
test("creates an Intern object", () => {
    const intern = new Intern("Vanessa", 90, "vpolier@hotmail.com", "vpolier81");

    expect(intern.school) .toEqual(expect.any(String));
});

//gets school from getSchool()
test('gets employee school', () => {
    const intern = new Intern("Vanessa", 90, "vpolier@hotmail.com", "UWA");

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

//gets role from getRole()
test('gets role of employee', () => {
    const intern = new Intern("Vanessa", 90, "vpolier@hotmail.com", "UWA");

    expect(intern.getRole()).toEqual("Intern");
});