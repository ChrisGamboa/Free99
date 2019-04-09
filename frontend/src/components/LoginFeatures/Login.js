import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import LoginForm from './LoginForm'

const axios = require('axios');

class LoginButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      username: null,
      password: null
    }; 
  };

  handleClickOpen = () => {
    this.setState({ open: true});
  };

  handleClose = () => {
    this.setState({ open: false});
  };

  getLoginFormData = (loginData) => {
    this.setState({username: loginData.username, password: loginData.password});
    console.log(this.state);
  }

  sendLoginRequest = () => {
    let data = this.state;
    axios({
      method: 'get',
      url: 'http://localhost:4000/loginrequest',
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
            Login
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Login to Free99</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter your username and password:
            </DialogContentText><br />
            <LoginForm sendLoginFormData={this.getLoginFormData} />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.sendLoginRequest} color="primary">
              Login
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default LoginButton;