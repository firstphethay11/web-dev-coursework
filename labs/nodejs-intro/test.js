class Member {
    nationallity = "Thai"
    constructor(fname, lname, yearOfBirth) {
        this.Fname = fname
        this.Lname = lname
        this.age  = new Date().getFullYear() - yearOfBirth
    }

}

class Student extends member {

}
const x = new Student("a","b",15)
