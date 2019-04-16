import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardPrimaryContent from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActionButtons from '@material-ui/core/CardActions';
import CardActionIcons from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import FavIcon from '@material-ui/icons/FavoriteBorder';
import DotIcon from '@material-ui/icons/MoreVert';



const styles = {

  //this is the card size given to my by the other cards.
  card: {
    maxheigth: 500,
    maxWidth: 300,
    margintop: 500
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
  cardmedia: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
    marginTop:'30'
  },
};
//shamelessly stolen from material demo: https://material-components.github.io/material-components-web-catalog/#/component/card
function EventCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card} stylealign="center">
        <CardPrimaryContent className='event__primary-action'>
          <CardMedia 
            wide 
            image='http://facilities.fiu.edu/facilitiesnewweb/SlideShowPics/ConstructionPics/ProjectPageImages/AHC_5_Renderings.jpg'
            className={classes.cardmedia} />
          <div className='event__primary'>
            <Typography variant='h5' className='event__title'>
              Lorem Ipsum
            </Typography>
            <Typography variant='subtitle2' className='event__subtitle'>
              Posted by Dolor Sit Amet
            </Typography>
          </div>
          <Typography variant='body2' className='event__secondary'>
            This is a big long description of the event we are currently viewing the page for.
          </Typography>
        </CardPrimaryContent>
        <CardActions>
          <CardActionButtons>
            <Button>Bookmark</Button>
          </CardActionButtons>
          <CardActionIcons>
            <IconButton>
              <FavIcon icon='favorite_border' />
            </IconButton>
            <IconButton>
              <ShareIcon icon='share' />
            </IconButton>
            <IconButton>
              <DotIcon icon='more_vert' />
            </IconButton>
          </CardActionIcons>
        </CardActions>
      </Card>
    </div>
  );
}

EventCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EventCard);