function Student(id, firstName, lastName, grades) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = grades;
    this.printInfo = function () {
        let avg = grades.reduce((total, curr) => total + curr, 0) / grades.length;
        console.log(`first name: ${firstName} | last name: ${lastName} | grades avg: ${avg} `);
    };
}

var st1 = new Student(1, "Andrew", "Andrews", [2, 3, 4, 5]);
var st2 = new Student(2, "Jane", "Janeson", [4, 4, 5, 5]);
st1.printInfo();
st2.printInfo();