var studentPrototype = {
    courses: ["math", "js", "sudcidal tendecies management"]
};

function Student(id, firstName, lastName) {
    this.id = id;
    this.lastName = lastName;
    this.firstName = firstName;
}
Student.prototype = studentPrototype;

var student1 = new Student(1, "Andrew", "Andrews");
var student2 = new Student(2, "Bill", "Billson");

console.log(student1.courses);
console.log(student1.prototype === student2.prototype);