import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import BrowseButton from '../Browse/BrowseButton';
import ProfileButton from '../MyProfile/ProfileButton';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';



class NavBar extends Component {
    constructor(props) {
        super(props);
        if(props){
            this.state = {
                key: this.props.index,
                search: this.props.search
            }
        }
        this.commonChange = this.commonChange.bind(this);
        this.goPost = this.goPost.bind(this);
        this.goBrowse = this.goBrowse.bind(this);
        this.goSingleEvent = this.goSingleEvent.bind(this);
        this.goHome = this.goHome.bind(this);
    }
    /* These functions manipulate browser URL and tells index.js to load pages */
    goHome() {
        this.props.history.push('/home');
    }

    goPost() {
        this.props.history.push('/post');
    }

    goBrowse() {
        this.props.history.push('/browse');
    }

    goSingleEvent() {
        this.props.history.push('/singleevent')
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
        this.render();
    }

    render() {
        return (
        <div id="navbar">
            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <h3>Free99</h3>&emsp;&emsp;
                    {/* <ProfileButton /> */}
                    <Button color="inherit" name="home" value="home" onClick={this.goHome}>Home</Button>&emsp;&emsp;
                    <Button color="inherit" name="post" value="post" onClick={this.goPost}>Post</Button>&emsp;&emsp;
                    <Button color="inherit" name="browse" value="browse" onClick={this.goBrowse}>Browse</Button>&emsp;&emsp;
                    <Button color="inherit" name="singleevent" value="singleevent" onClick={this.goSingleEvent}>Single Event</Button>&emsp;&emsp;

                    <SearchIcon style={{position: "relative"}} />
                    <InputBase placeholder="Search..." style={{borderRadius: "theme.shape.borderRadius"}}/>
                </Toolbar>
            </AppBar>
        </div>
        )
    }
}

export default withRouter(NavBar);