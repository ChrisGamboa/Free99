import React, { Component } from 'react';
//import { withRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import HomePageCard from './components/HomePageCard/HomePageCard';

const axios = require('axios');

class App extends Component {
    componentDidMount() {
        axios.get('http://localhost:4000/')
        .then(res => {
          console.log(res);
        })
    }

    render() {
        return (
        <div><NavBar />
            <div style={{position: 'absolute', top: '40%', left: '40%'}}>
                {this.props.children}
            </div>

        </div>
        )
    }
}

export default App;