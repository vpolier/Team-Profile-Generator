// using Engineer constructor
const Engineer = require("../src/Engineer");

//create engineer object
test("creates an Engineer object", () => {
    const engineer = new Engineer("Vanessa", 90, "vpolier@hotmail.com", "vpolier81");

    expect(engineer.github) .toEqual(expect.any(String));
});

//gets github from getGithub()
test('gets engineer github value', () => {
    const engineer = new Engineer("Vanessa", 90, "vpolier@hotmail.com", "vpolier81");

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

//gets role from getRole()
test('gets role of employee', () => {
    const engineer = new Engineer("Vanessa", 90, "vpolier@hotmail.com", "vpolier81");

    expect(engineer.getRole()).toEqual("Engineer");
});