import React from 'react';
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


const styles = {
  card: {
    maxWidth: 345,
    margin: '50px'
    },
  media: {
    height: 150,
  },
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardHeader
          title = "Event Title"
        />
          <CardMedia
            className={classes.media}
            //image="/static/images/cards/contemplative-reptile.jpg"
            title="Movies"
            />
            <CardContent>
              <Typography component="p">
              "Description"
              </Typography>
              <Typography component="p">
              "Location"
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

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
