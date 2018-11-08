var studentPrototype = {
    courses: ["math", "js", "sudcidal tendecies management"]
};

function createStudent(base, id, firstName, lastName) {
    let result = Object.create(base);
    result.id = id;
    result.lastName = lastName;
    result.firstName = firstName;
    return result;
}

var student1 = createStudent(studentPrototype, 1, "Andrew", "Andrews");
var student2 = createStudent(studentPrototype, 2, "Bill", "Billson");

console.log(student1.courses);
console.log(student1.prototype === student2.prototype);