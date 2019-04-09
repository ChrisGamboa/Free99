import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class PostingForm extends Component {
    constructor(props) {
        super(props);
        if(props){
            this.state = {
                key: this.props.index,
                EventName: this.props.EventName,
                EventDescription: this.props.EventDescrciption,
                EventTimeDate: this.props.EventTimeDate,
                EventPicture: this.props.EventPicture,
            }
        }
        this.commonChange = this.commonChange.bind(this);
    }

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
    return(
    <div className="PostingForm">
        
        <TextField
          variant="standard" 
          margin = "dense"
          type="text"
          label="Event Name"
          name="EventName"
          onChange={this.commonChange} /* Sets onChange prop to our custom commonChange function */
          value={this.state.username}  /* Passes value of username from current state */
        />&emsp;&emsp;
       
       
        <TextField  
          type="text"
          label="Event Time and Date"
          name="EventTimeDate"
          onChange={this.commonChange} /* Sets onChange prop to our custom commonChange function */
          value={this.state.password}  /* Passes value of password from current state */
        />
        
        
        <TextField 
          multiline= "true"
          type="text"
          label="Event Description"
          name="EventDescription"
          onChange={this.commonChange} /* Sets onChange prop to our custom commonChange function */
          value={this.state.password}  /* Passes value of password from current state */
        />
    </div>
    )}
}

export default PostingForm;
