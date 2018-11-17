function convertToFahrenheit() {
    let celsiusTemp = document.getElementById("celsiusInput").value;
    if (celsiusTemp) {
        let farhenheitTemp = celsiusToFahrenheit(celsiusTemp);
        document.getElementById("farhenheitOutput").textContent = farhenheitTemp;
    }
}

function convertToCelsius() {
    let fahrenheitTemp = document.getElementById("fahrenheitInput").value;
    if (fahrenheitTemp) {
        let celsiusTemp = fahrenheitToCelisus(fahrenheitTemp);
        document.getElementById("celsiusOutput").textContent = celsiusTemp;
    }
}

function celsiusToFahrenheit(celsius) {
    return celsius * 1.8 + 32;
}

function fahrenheitToCelisus(farhenheit) {
    return (farhenheit - 32) / 1.8;
}