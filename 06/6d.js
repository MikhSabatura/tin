function addTableRow() {
    let table = document.getElementById("employees");
    let nameInputVal = document.getElementById("name-input").value;
    let surnameInputVal = document.getElementById("surname-input").value;
    let salaryInputVal = document.getElementById("salary-input").value;

    let row = table.insertRow(-1);
    row.insertCell(0).innerHTML = nameInputVal;
    row.insertCell(1).innerHTML = surnameInputVal;
    row.insertCell(2).innerHTML = salaryInputVal;
}