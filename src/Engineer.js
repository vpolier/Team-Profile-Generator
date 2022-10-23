class Engineer {
    constructor(name, id, email, githubName){
        this.name = name;
        this.id = id;
        this.email = email;
        this.githubName = githubName;
    }
    getName (){
        return this.name
    }
    getId () {
        return this.id
    }
    getEmail (){
        return this.email
    }
    getGithub(){
        return this.githubName
    }
    getRole(){
        return 'Engineer'
    }
}
module.exports = Engineer