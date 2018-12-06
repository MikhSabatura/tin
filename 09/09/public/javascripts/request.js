"use strict";
const calculatorUrl = "http://localhost:3000/calculate";
const reqestOptions = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    mode: "cors"
};

function calculate() {
    reqestOptions.body = JSON.stringify(getRequestObject());
    fetch(calculatorUrl, reqestOptions).then(response => {
        if (!response.ok) {
            throw Error("illegal parameters");
        }
        return response.json();
    }).then(response => {
        displayRestult(response.result);
    }).catch(displayError);
}

function displayRestult(result) {
    document.getElementById("result").innerHTML = result;
    document.getElementById("error").innerHTML = null;
}

function displayError(err) {
    document.getElementById("error").innerHTML = err;
    document.getElementById("result").innerHTML = null;
}

function getRequestObject() {
    let result = {};
    result.p1 = document.getElementById("p1").value;
    result.p2 = document.getElementById("p2").value;
    result.operation = document.getElementById("operation").value;
    return result;
}