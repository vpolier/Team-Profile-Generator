const Intern = require("../src/Intern")
describe('Test Intern Class', () => {
    
    it('intern object is created correctly', () => {
       const intern = new Employee("abc", 1, "vpo@hotmail.com")
       expect(intern.getName()).toBe("abc")
       expect(intern.getId()).toBe(1)
       expect(intern.getEmail()).toBe("vpo@hotmail.com")
       expect(intern.getRole()).toBe("Employee")
      });
})