import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
//import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import ImageGridList from '../Dialog/GridList/GridList';

class DialogComp extends Component {

    state = {
        open: false
    }

    handleClickOpen = () => {
        this.setState ({
            open : !this.state.open,
        })
    }

    render(){
      const {open} = this.state;
      return (
        <>
        <Button variant="outlined" 
                color="secondary" 
                onClick={this.handleClickOpen}>Click for full-screen Description</Button>
          
          {/* THIS IS THE FULL DESCRIPTION LAYOUT PRESENTED AFTER CLICKING THE BUTTON*/}
          <Dialog fullScreen
            open={open}
            onClose={this.handleClickOpen}
            style={{width: '100%', marginLeft: '0', marginRight: '20%', backgroundColor: 'transparent'}}
            overlaystyle={{backgroundColor: 'transparent'}}
            title= 'Loading'
            titlestyle={{paddingTop: '10px', paddingLeft: '45px', fontSize: '12px', lineHeight: '80px'}}
            >
            <AppBar>
              <Toolbar>
              <IconButton edge="start" color="inherit" onClick={this.handleClickOpen} aria-label="close">
                  <CancelRoundedIcon />
                </IconButton>
                <Typography variant="h6">
                  <strong>Name:</strong> {this.props.name} <br />
                  <strong>Description:</strong> {this.props.description}
                </Typography>
              </Toolbar>
            </AppBar>
            <List>
              <ListItem button>
                <ListItemText primary="Main information About the Route" secondary="No Entender" />
                <h5>Orientation: {this.props.orientation}</h5>
              </ListItem>
            </List>
            <ImageGridList imgs={this.props.imgSrc}/>
            <h5>Comments: {this.props.comments}</h5>
          </Dialog>
      </>
        )
    }
}
export default DialogComp;