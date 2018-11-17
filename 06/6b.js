setTimeout(() => {
    let paragraph = document.createElement("p");
    let text = document.createTextNode("This paragraph was added by JS");
    paragraph.appendChild(text);
    document.getElementsByTagName("body")[0].appendChild(paragraph);
}, 5000);