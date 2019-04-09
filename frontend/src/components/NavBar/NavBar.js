import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import BrowseButton from '../Browse/BrowseButton';
import ProfileButton from '../MyProfile/ProfileButton';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';



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
                    <ProfileButton />
                    <BrowseButton />
                    <SearchIcon style={{position: "relative"}} />
                    <InputBase placeholder="Search..." style={{borderRadius: "theme.shape.borderRadius"}}/>
                </Toolbar>
            </AppBar>
        </div>
        )
    }
}

export default (NavBar);