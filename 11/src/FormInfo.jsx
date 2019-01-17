import React from "react";
import Label from "./LabelComponent.jsx";

export default function(props) {
    return (
        <div>
            <Label name = "Email" value = {props.email ? "invalid" : "valid"}/> <br/>
            <Label name = "Password" value = {props.password ? "invalid" : "valid"}/> <br/>
            <Label name = "Age" value = {props.age ? "invalid" : "valid"} /> <br/>
        </div>
    );
}
