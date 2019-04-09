import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
//const axios = require('axios');

class SignupForm extends Component {
    constructor(props) {
        super(props);
        if(props){
            this.state = {
                key: this.props.index,
                email: this.props.email,
                username: this.props.username,
                password: this.props.password,
                passwordConfirmation: this.props.passwordConfirmation
            }
        }
        this.commonChange = this.commonChange.bind(this);
        this.sendSignUpFormData = this.props.sendSignUpFormData.bind(this);
    }
    /*
        this function passes email, username, password, confirmPassword
         state variables to parent component 
    */
    sendSignUpFormData = () => {
        this.props.getLoginFormData(this.state);
    }
    
    /* 
        DO NOT MODIFY
        I designed this function to universally handle re-rendering
        components when states change

        In order for this function to work properly, the 'name' prop of the
        component must be equivalent to the state variable name. 
        ~CG
     */
    commonChange = (event) => {
        /* 
            this statement prints changed state to console for testing.
            comment the next line out for production
        */
        console.log('CHANGING ', event.target.value);
        let data = this.state;
        data[event.target.name] = event.target.value;
        this.setState(data);
        this.sendSignUpFormData(this.state); /* triggers sending state to parent */
        this.render();
    }

    render() {
        return(
        <div className="SignupForm">
            <TextField
              variant="outlined" 
              type="text"
              label="Email"
              name="email"
              onChange={this.commonChange} /* Sets onChange prop to our custom commonChange function */
              value={this.state.email}  /* Passes value of username from current state */
            />&emsp;&emsp;
            <TextField
              variant="outlined" 
              type="text"
              label="Username"
              name="username"
              onChange={this.commonChange} /* Sets onChange prop to our custom commonChange function */
              value={this.state.username}  /* Passes value of username from current state */
            />&emsp;&emsp;<br /><br />
            <TextField 
              variant="outlined" 
              type="password"
              label="Password"
              name="password"
              onChange={this.commonChange} /* Sets onChange prop to our custom commonChange function */
              value={this.state.password}  /* Passes value of password from current state */
            />&emsp;&emsp;
            <TextField 
              variant="outlined" 
              type="password"
              label="Confirm Password"
              name="passwordConfirmation"
              onChange={this.commonChange} /* Sets onChange prop to our custom commonChange function */
              value={this.state.passwordConfirmation}  /* Passes value of password from current state */
            />
        </div>
        )}
}

export default SignupForm;