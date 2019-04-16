import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
import App from './App';
import ImgMediaCard from './components/PostingPageFeatures/PostPage/PostPage';
import Browse from './components/Browse/Browse'
import * as serviceWorker from './serviceWorker';
import HomePageCard from './components/HomePageCard/HomePageCard';
import EventCard from './components/EventCard/EventCard' 


ReactDOM.render(
    (<><Router>
        <div style={{position: 'absolute', top: '40%', bottom: '75%', left: '40%'}}>
        <Route path={""} component={App} />
        <Route path={"/home"} component={HomePageCard} />
        <Route path={"/post"} component={ImgMediaCard} />
        <Route path={"/browse"} component={Browse} />
        <Route path={"/singleevent"} component={EventCard} />
      
        </div>
    </Router></>),
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
