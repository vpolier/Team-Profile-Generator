const Manager = require("../src/Manager")
describe('Test Manager Class', () => {
    
    it('manager object is created correctly', () => {
       const manager = new Employee("abc", 1, "vpo@hotmail.com", "301")
       expect(manager.getName()).toBe("abc")
       expect(manager.getId()).toBe(1)
       expect(manager.getEmail()).toBe("vpo@hotmail.com")
       expect(manager.getofficeNumber()).toBe("301")
       expect(manager.getRole()).toBe("Manager")
      });
})