const Employee = require("../src/Employee")
describe('Test Employee Class', () => {
    
    it('employee object is created correctly', () => {
       const emp = new Employee("abc", 1, "vpo@hotmail.com")
       expect(emp.getName()).toBe("abc")
       expect(emp.getId()).toBe(1)
       expect(emp.getEmail()).toBe("vpo@hotmail.com")
       expect(emp.getRole()).toBe("Employee")
      });
})