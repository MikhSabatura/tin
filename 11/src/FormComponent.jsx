import React from "react";
import Text from "./TextComponent.jsx";
import FormInfo from "./FormInfo.jsx";

const emailRegex = /(.+)@(.+){2,}\.(.+){2,}/;

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: props.email,
            password: props.password,
            age: props.age,
            emailValidationMessage: props.emailValidationMessage,
            passwordValidationMessage: props.passwordValidationMessage,
            ageValidationMessage: props.ageValidationMessage
        };
    }

    emailHandleChange(event) {
        this.emailValidate(event.target.value);
        this.setState({ email: event.target.value });
    }

    passwordHandleChange(event) {
        this.passwordValidate(event.target.value);
        this.setState({ password: event.target.value });
    }

    ageHandleChange(event) {
        this.ageValidate(event.target.value);
        this.setState({ age: event.target.value });
    }

    emailValidate(email) {
        if (emailRegex.test(email)) {
            this.setState({ emailValidationMessage: null });
        } else {
            this.setState({ emailValidationMessage: "invalid email" });
        }
    }

    passwordValidate(password) {
        if (/\d/.test(password) && /[a-zA-Z]/.test(password) && password.length > 5) {
            this.setState({ passwordValidationMessage: null });
        } else {
            this.setState({ passwordValidationMessage: "must have at least 1 digit, 1 character, and be longer than 5 symbols" });
        }
    }

    ageValidate(age) {
        age = Number(age);
        if(isNaN(age)){
            this.setState({ ageValidationMessage: "enter number" });
        } else if(age < 18) {
            this.setState({ ageValidationMessage: "you need to be at least 18" });
        } else {
            this.setState({ ageValidationMessage: null });
        }
    }

    render() {
        return (
            <div>
                <form>
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="text" id="email" onChange={this.emailHandleChange.bind(this)} /> 
                    <Text text={this.state.emailValidationMessage} className="error"/> <br />

                    <label htmlFor="email" className="form-label">Password:</label>
                    <input type="password" id="password" onChange={this.passwordHandleChange.bind(this)} /> 
                    <Text text={this.state.passwordValidationMessage} className="error"/> <br />

                    <label htmlFor="email" className="form-label">Age:</label>
                    <input type="text" id="age" onChange={this.ageHandleChange.bind(this)} /> 
                    <Text text={this.state.ageValidationMessage} className="error"/> <br />
                </form> <br />
                <FormInfo email={this.state.emailValidationMessage} password={this.state.passwordValidationMessage} age={this.state.ageValidationMessage} />
            </div>
        );
    }
}

Form.defaultProps = {
    email: "",
    password: "",
    age: 0
};

export default Form;