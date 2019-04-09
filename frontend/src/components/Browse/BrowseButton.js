import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

class BrowseButton extends Component {
    render() {
        return(
            <div>
                <Button color="inherit" size="large">
                    Browse
                </Button>
            </div>
        )
    }
}

export default BrowseButton;