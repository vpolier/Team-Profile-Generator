// employee constructor
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //returning name, ID, Email, e,ployee type from input
    getName (){
        return this.name;
    }

    getId () {
        return this.id;
    }

    getEmail (){
        return this.email;
    }

    getRole(){
        return 'Employee';
    }
};

// to be exported
module.exports = Employee;