const Engineer = require("../src/Engineer")
describe('Test Engineer Class', () => {
    
    it('engineer object is created correctly', () => {
       const engineer = new Employee("abc", 1, "vpo@hotmail.com")
       expect(engineer.getName()).toBe("abc")
       expect(engineer.getId()).toBe(1)
       expect(engineer.getEmail()).toBe("vpo@hotmail.com")
       expect(engineer.getRole()).toBe("Employee")
      });
})