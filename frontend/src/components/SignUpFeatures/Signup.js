import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import SignupForm from './SignupForm';

const axios = require('axios');

class SignupButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      email: null,
      username: null,
      password: null,
      passwordConfirmation: null
    }; 
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  getSignUpFormData = (loginData) => {
    this.setState({username: loginData.username, password: loginData.password});
    console.log(this.state);
  }

  sendSignUpRequest = () => {
    let data = this.state;
    axios({
      method: 'get',
      url: 'http://localhost:4000/signuprequest',
      data
    })
    .then(res => {
      console.log(res);
    })
  }

  render() {
    return (
      <div>
        <Button color="inherit" size="large" onClick={this.handleClickOpen}>
            Sign-up
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Welcome to Free99!</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter your desired email, username, and password:
            </DialogContentText><br />
            <SignupForm sendSignUpFormData={this.getSignUpFormData} />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.sendSignUpRequest} color="primary">
              Sign Up
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default SignupButton;