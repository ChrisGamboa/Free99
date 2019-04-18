import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PostImage from '../PostImage/PostImage';
import PostingForm from '../PostingForm/PostingForm';

const axios = require('axios');

class PostingButton extends Component {
  constructor(props) {
    super(props);
    if (props) {
      this.state = {
        open: false,
        EventName: null,
        EventLocation: null,
        EventDescription: null,
        EventPicture: null
      }
    };
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  //sets state to posting form values on change
  getPostingFormData = (PostingData) => {
    this.setState({
      EventName: PostingData.EventName,
      EventLocation: PostingData.EventLocation,
      EventDescription: PostingData.EventDescription,
      // EventPicture: PostingData.EventPicture
    });
    console.log(this.state);
  }

  getPostingPictureData = (PostingData) => {
    this.setState({
      EventPicture: PostingData.EventPicture
    });
    console.log('inside parent comp get posting has ', this.state);
  }

  sendPostingRequest = () => {
    let data = this.state;
    console.log(data);
    axios({
      method: 'post',
      url: 'http://localhost:4000/PostEvent',
      data: data 
    })
      .then(res => {
        console.log(res.data);
      })
  }
  
  render() {
    //function ImgMediaCard(props) {
    //const { classes } = props;
    return (
      <div>
        <Card /*className={classes.card}*/ stylealign="center">
          <CardActionArea>
            <PostImage sendPostingPictureData={this.getPostingPictureData} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                <PostingForm sendPostingFormData={this.getPostingFormData} />
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button onClick={this.sendPostingRequest} size="small" color="primary">
              Share
          </Button>
            <Button size="small" color="primary">
              Save
          </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}
export default PostingButton;