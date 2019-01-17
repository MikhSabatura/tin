import React from "react";

export default function (props) {
    return <label className={props.className}>{props.name} : {props.value}</label>;
}