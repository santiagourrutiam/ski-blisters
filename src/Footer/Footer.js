import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

class footer extends React.Component {
  state = {
    menu: [
      { mapa:'Mapa 1', description:'Outdoors'},
      { mapa:'Mapa 2', description:'Old maps'},
      { mapa:'Mapa 3', description:'Glacier'},
    ]
  }
  switchMenuHandler = () => {
    //console.log ('It was clicked')
    this.setState ({
      menu: [
              { mapa:'Mapa A', description:'Rando'},
              { mapa:'Mapa B', description:'Ski'},
              { mapa:'Mapa C', description:'Backcountry'},
      ]
    })
  }
    render () {
    return (
        <ButtonGroup size="small" aria-label="small outlined button group">
        <Button onClick={this.switchMenuHandler}>{ this.state.menu[0].mapa }</Button>
        <Button caption="this.state.menu[1].description">{ this.state.menu[1].mapa }</Button>
        <Button>{ this.state.menu[2].mapa }</Button>
      </ButtonGroup>
        )
}
}
export default footer;
