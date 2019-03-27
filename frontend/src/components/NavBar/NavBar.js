import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import LoginButton from '../LoginFeatures/Login';
import { withStyles } from '@material-ui/core/styles';


class NavBar extends Component {
    render() {
        return (
        <div id="navbar">
            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <h3>Free99</h3>&emsp;&emsp;
                <LoginButton />
                </Toolbar>
            </AppBar>
        </div>
        )
    }
}

export default (NavBar);