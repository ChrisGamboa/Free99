import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
import App from './App';
import ImgMediaCard from './components/PostingPageFeatures/PostPage/PostPage';
import Browse from './components/Browse/Browse'
import * as serviceWorker from './serviceWorker';
import HomePageCard from './components/HomePageCard/HomePageCard';


ReactDOM.render(
    (<><Router>
        <div>
        <div style={{position: 'absolute', top: '40%', bottom: '75%', left: '40%'}}>
        <Route path={""} component={App} />
        <Route path={"/home"} component={HomePageCard} />
        <Route path={"/post"} component={ImgMediaCard} />
        {/* <Route path={"/singleevent"} component={SingleEvent} /> */}
        </div>
        <div style={{position: 'absolute', top: '15%', bottom: '75%', left: '0%'}}> 
        <Route path={"/browse"} component={Browse} />
        </div>
        </div>
    </Router></>),
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
