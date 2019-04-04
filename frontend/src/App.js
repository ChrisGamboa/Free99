import React, { Component } from 'react';
//import { withRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import HomePageCard from './components/HomePageCard/HomePageCard';

class App extends Component {
    render() {
        return (
        <div><NavBar />
            <div style={{position: 'absolute', top: '40%', bottom: '75%', left: '40%'}}>
                <HomePageCard />
            </div>

        </div>
        )
    }
}

export default App;