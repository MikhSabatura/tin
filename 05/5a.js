var myObj = {
    prop0: true,
    prop1: "prop1",
    prop2: 2,
    prop3() {
        console.log("prop3");
    },
    prop4() {
        for (let i = 0; i < 10; i++) {
            console.log(i);
        }
    },
    prop5(str) {
        for (let i = 0; i < str.length; i++) {
            console.log(str.charAt(i));
        }
    }
};

function printProperties(obj) {
    for (const prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            console.log(`property '${prop}', type: ${typeof obj[prop]}, value: ${obj[prop]}`);
        }
    }
}

printProperties(myObj);