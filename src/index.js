import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar/NavBar'
//import Footer from './components/Footer/Footer';
import MapLogic from './components/MapLogic/MapLogic';
import * as serviceWorker from './serviceWorker';
import './App.css';
import Grid from '@material-ui/core/Grid';

ReactDOM.render(
  <>
    <div >
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Grid item xs={12}>
          <MapLogic />
        </Grid>
        </Grid>
    </div>      
  </>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
