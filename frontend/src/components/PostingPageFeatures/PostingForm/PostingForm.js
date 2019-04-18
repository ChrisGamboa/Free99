import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
//import PostPage from '../PostPage/PostPage';
//import PostImage from '../PostImage/PostImage';

class PostingForm extends Component {
    constructor(props) {
        super(props);
        if(props){
            this.state = {
                key: this.props.index,
                EventName: this.props.EventName,
                EventDescription: this.props.EventDescrciption,
                EventLocation: this.props.EventLocation,
            }
        }
        this.commonChange = this.commonChange.bind(this);
        this.sendPostingFormData = this.props.sendPostingFormData.bind(this);

    }

    /* this function sets state to LoginForm's values on change */
    getPostingFormData = (PostingData) => {
    this.setState({EventName: PostingData.EventName, EventLocation: PostingData.EventLocation,EventDescrciption: PostingData.EventDescrciption});
    // console.log(this.state);
  }

    sendPostingFormData = () => {
        this.props.getPostingFormData(this.state);
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
        this.sendPostingFormData(this.state); 
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
          value={this.state.EventName}  /* Passes value of username from current state */
        />&emsp;&emsp;
       
       
        <TextField  
          type="text"
          label="Event Location"
          name="EventLocation"
          onChange={this.commonChange} /* Sets onChange prop to our custom commonChange function */
          value={this.state.EventLocation}  /* Passes value of password from current state */
        />
        
        
        <TextField 
          multiline= "true"
          type="text"
          label="Event Description"
          name="EventDescription"
          onChange={this.commonChange} /* Sets onChange prop to our custom commonChange function */
          value={this.state.EventDescription}  /* Passes value of password from current state */
        />
    </div>
    )}
}

export default PostingForm;
