class Student {
    constructor(id, firstName, lastName, grades) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.grades = grades;
    }
    get avgGrade() {
        return this.grades.reduce((total, curr) => total + curr, 0) / this.grades.length;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    set fullName(name) {
        let strings = name.split(/\s+/);
        this.firstName = strings[0] || '';
        this.lastName = strings[1] || '';
    }
    printInfo() {
        console.log(`${this.fullName} | grades avg: ${this.avgGrade}`);
    }
}

var st1 = new Student(1, "Andrew", "Andrews", [2, 3, 4, 5]);
var st2 = new Student(2, "Jane", "Janeson", [4, 4, 5, 5]);
var st3 = new Student(3, "", "", [3, 4, 5, 4, 4]);
st3.fullName = "Max Power";

st1.printInfo();
st2.printInfo();
st3.printInfo();