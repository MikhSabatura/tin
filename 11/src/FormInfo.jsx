import React from "react";
import Label from "./LabelComponent.jsx";

function createValidationLabel(name, value) {
    return <Label name = {name} value = {value ? "invalid" : "valid"} className={value ? "error" : "ok"}/>;
}

export default function(props) {
    return (
        <div>
            {createValidationLabel("Email", props.email)}<br/>
            {createValidationLabel("Password", props.password)}<br/>
            {createValidationLabel("Age", props.age)}<br/>
        </div>
    );
}
