import React, { Component } from 'react';

//GeoJSON imports
import LocalAreas from '../../models/localAreas.json';
import SkiShops from '../../models/skiShops.json';
import Volcanos from '../../models/volcanos.json';
import SkiTouringRoutes from '../../models/skiTouringRoutes.json';
import AvalancheAreas from '../../models/avalancheAreas.json';
import LeafletMap from '../LeafletMap/LeafletMap';
//import './maplogic.css';
import BottomButtonGroup from '../ButtonGroup/ButtonGroup';

/* 
TODO (02-05-2020):
- images for <Dialog> size 640x427.
- Buttons or layers to manage the tiles - DONE
- Finish every object description with photos and info
- Change behavior to onmouseout for Popups
- Center map after click with state
*/

class MapLogic extends Component {
    constructor(props){
        super(props);
        console.log ('Maplogic constructor');
    

    this.state = {
        mapCenter           : [-38.392, -71.568],
        zoomLevel           : 13.1,
        tileLayerUrl        : 'https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=62bae950ae134822a4c875db79d87cf1',
        routes              : SkiTouringRoutes.features,
        showRoutes          : false,
        localAreas          : LocalAreas.features,
        showLocalAreas      : false,
        skiShops            : SkiShops.features,
        showSkiShops        : false,
        volcanos            : Volcanos.features,
        showVolcanos        : false,
        avalancheAreas      : AvalancheAreas.features,
        showAvalancheAreas  : false,
    }
    }
    static getDerivedStateFromProps (props, state) {
        console.log ('MapLogic getDerivedStateFromProps', props);
        return state;
    }

    componentDidMount (){
        console.log ('MapLogic componentDidMount ()');
    }

    volcanosToggler = () => {
        const doesShowVolcanos = this.state.showVolcanos
        this.setState ({showVolcanos : !doesShowVolcanos });
    }

    avalancheToggler = () => {
        const doesShowAvalancheAreas = this.state.showAvalancheAreas
        this.setState ({showAvalancheAreas : !doesShowAvalancheAreas });
    }

    routesToggler = () => {
        const doesShowRoutes = this.state.showRoutes
        this.setState ({showRoutes : !doesShowRoutes });
    }
    areasToggler = () => {
        const doesShowAreas = this.state.showLocalAreas
        this.setState ({showLocalAreas : !doesShowAreas });
    }
    skiShopsToggler = () => {
        const doesShowSkiShops = this.state.showSkiShops
        this.setState ({showSkiShops : !doesShowSkiShops });
    }
    render() {
        console.log ('MapLogic Render');
            return (
                <>
                    <LeafletMap
                        center={this.state.mapCenter} 
                        zoom={this.state.zoomLevel} 
                        url={this.state.tileLayerUrl} 
                        volcanos={this.state.volcanos}
                        showVolcanos={this.state.showVolcanos}
                        routes={this.state.routes}
                        showRoutes={this.state.showRoutes}
                        localAreas={this.state.localAreas}
                        showLocalAreas={this.state.showLocalAreas}
                        skiShops={this.state.skiShops}
                        showSkiShops={this.state.showSkiShops}
                        avalancheAreas={this.state.avalancheAreas}
                        showAvalancheAreas={this.state.showAvalancheAreas}  
                    />
                    <BottomButtonGroup 
                        clickedVolcanos={ () => this.volcanosToggler()}
                        clickedRoutes={ () => this.routesToggler()}
                        clickedLocalAreas={ () => this.areasToggler()}
                        clickedAvalancheAreas={ () => this.avalancheToggler()}
                        clickedSkiShops={ () => this.skiShopsToggler()}
                    />
                </>
            ) //return closure
    } // render closure
}
export default MapLogic;