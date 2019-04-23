import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';

class BrowseTile extends Component{
  constructor(props){
  super(props);
  if(props){
      this.state = {
          key: this.props.index,
          EventName: this.props.EventName,
          EventPicture: this.props.EventPicture,
          EventLocation: this.props.EventLocation,
          EventHours: this.props.EventHours,
          EventDescription: this.props.EventDescription,
        }
    }
  }
  render(){
  return(
    <Card style={{display: 'inline-block',minWidth:200, maxWidth:345, margin:10}}>
      <CardActionArea>
        <CardHeader
          title = {(this.state.EventTitle)}
        />
          <CardMedia style= {{height:250}} image={(this.state.EventPicture)}/>
            <CardContent>
              <Typography component="p">
                {(this.state.EventDescription)}
                <br />
              </Typography>
              <Typography component="p">
                <br />
              </Typography>
              <Typography component="p">
              Location:<br />
                {(this.state.EventLocation)}
              </Typography>
              <Typography component="p">
                <br />
              </Typography>
              <Typography component="p">
              Hours:<br />
                {(this.state.EventHours)}
              </Typography>
              </CardContent>
              </CardActionArea>
              <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
        </CardActions>
    </Card>
  );
}
}

export default (BrowseTile);
