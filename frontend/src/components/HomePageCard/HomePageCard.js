import React, { Component } from 'react';
import Login from '../LoginFeatures/Login';
import Signup from '../SignUpFeatures/Signup';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class HomePageCard extends Component {
    render() {
        return(
            <div>
                <Card style={{maxWidth: 300 , height: 150}}>
                    <CardContent>
                        <Typography style={{textAlign: "center"}} variant='h5'>Welcome to Free99!</Typography>
                    </CardContent>
                    <CardActions style={{marginLeft: "5%"}}>
                        <Login />
                        <Signup />
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default HomePageCard;