import React, { Component } from 'react';
import BrowseTile from './BrowseTile';
const axios = require('axios');


class Browse extends Component {
    constructor(props){
        super(props);
        if(props){
            this.state = {
                data: [ {
                    key:'' ,
                    EventName: 'AcroYoga',
                    EventPicture: 'https://i.ytimg.com/vi/xECiTdgy9nE/maxresdefault.jpg',
                    EventLocation: 'Soundscape Park Miami Beach',
                    EventHours: 'Saturday, April 27, 2019 at 7:00PM',
                    EventDescription: 'Come bring your friends and enjoy a day under the sun practicing your yoga skills',
                  },
                  {
                    key: '',
                    EventName: 'Movies Under the Star',
                    EventPicture: 'https://assets.atdw-online.com.au/images/a672f9da6de8c2f49f9af9c027564513.jpeg?rect=223%2c0%2c3555%2c2666&w=1200',
                    EventLocation: 'Cinema Series in SoundScape Park. Lincoln Road',
                    EventHours: 'Sunday, April 28, 2019 at 9:00PM',
                    EventDescription:'Grab your lawn chairs, blankets, and picnic baskets and enjoy free movies under the stars at the Cinema Series in SoundScape Park' ,
                  },
                  {
                    key: '',
                    EventName: 'WynwoodArt',
                    EventPicture: 'https://d2jv9003bew7ag.cloudfront.net/uploads/Wynwood-Walls-Slider.jpg',
                    EventLocation: '2219 NW 2nd Ave, Miami, FL 33127',
                    EventHours: 'Friday, April 26, 2019 at 1:00PM',
                    EventDescription:'Wynwood Art Walk offers art tours, graffiti tours and gallery tours which explore a cross-section of Wynwood galleries and local street art. ' ,
                  }],

                search: ""
            }
        }
        this.commonChange = this.commonChange.bind(this);
    }
    

    commonChange = (event) => {
        console.log('CHANGING ', event.target.value);
        let data = this.state;
        data[event.target.name] = event.target.value;
        this.setState(data);
        this.render();
    }

    // componentDidMount() {
    //     let data = this.state;
    //     console.log(data);
    //     axios.get('http://localhost:4000/GetAllEvent')
    //     .then (res => {
    //         this.setState(res);
    //     })
    //     console.log(this.state);
    //     this.render();
    // }


        
    //state need consstructor - empty array for constructor 
    //state is array 
    //component did mount - get request through axios and save state into browse state 
    //mapping function for tile where you pass the variables as props
        render(){
        return(
            <div>
                    {this.state.data.map((d, index) =>
                        <BrowseTile
                        key={index}
                        EventName = {d.EventName}
                        EventPicture = {d.EventPicture}
                        EventLocation = {d.EventLocation}
                        EventDescription = {d.EventDescription}
                        EventHours = {d.EventHours}
                        />)
                    }
            </div>
        )
    }
}

export default (Browse);