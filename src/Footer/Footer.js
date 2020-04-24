import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import './Footer.css';

class Footer extends React.Component {
    render () {
    return (
        <div className="Footer">
        <ButtonGroup size="large" variant="contained" color="secondary" fullWidth="true">
        <Button>Ski Touring Araucania</Button>
        <Button>Boot Fitting</Button>
        <Button>Camper Van Rental</Button>
        <Button>Ski Rental</Button>
        <Button>Backcountry Gear</Button>
        <Button>Avalanche Info</Button>
        <Button>Weather</Button>
        <Button>Ski Resort Tickets</Button>
      </ButtonGroup>
      </div>)
  }
}
export default Footer;
