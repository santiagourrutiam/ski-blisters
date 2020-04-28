import React, { Component } from 'react';
import Backcountry from '../../backcountry_beta.json';
//import { Map, Marker, Popup, Polygon, TileLayer, Polyline } from "react-leaflet";
//import MarkerClusterGroup from 'react-leaflet-markercluster';
import 'react-leaflet-markercluster/dist/styles.min.css';
import { Button } from '@material-ui/core';
import LeafletMap from '../LeafletMap/LeafletMap';
import FullScreenDialog from '../FullScreenDialog/FullScreenDialog';


class MapLogic extends Component {

    state = {
        mapCenter       : [-38.392, -71.568],
        zoomLevel       : 13.1,
        tileLayerUrl    : 'https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=62bae950ae134822a4c875db79d87cf1',
        locations       : Backcountry.features.filter(location => location.properties.InfoType === 'location'),
        routes          : Backcountry.features.filter(route => route.properties.InfoType === 'route'),
        areas           : Backcountry.features.filter(area => area.properties.InfoType === 'area'),
        showLocations   : false,
        showRoutes      : false,
        showAreas       : false,
    };
    switchMapHandler = () => {
        this.setState({
            tileLayerUrl   : 'https://tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=62bae950ae134822a4c875db79d87cf1',
        });
    };
    locationsToggler = () => {
        const doesShow = this.state.showLocations
        this.setState ({showLocations : !doesShow });
    };
    routesToggler = () => {
        const doesShow = this.state.showRoutes
        this.setState ({showRoutes : !doesShow });
    }
    areasToggler = () => {
        const doesShow = this.state.showAreas
        this.setState ({showAreas : !doesShow });
    };

    render() {    
            return (
                <>
                <LeafletMap 
                    center={this.state.mapCenter} 
                    zoom={this.state.zoomLevel} 
                    url={this.state.tileLayerUrl} 
                    locations={this.state.locations}
                    showLocations={this.state.showLocations}
                    routes={this.state.routes}
                    showRoutes={this.state.showRoutes}
                    areas={this.state.areas}
                    showAreas={this.state.showAreas}
                />
                <Button variant="contained" color="primary" onClick={ () => this.locationsToggler()}>Locations</Button>
                <Button variant="contained" color="primary" onClick={ () => this.routesToggler()}>Routes</Button>
                <Button variant="contained" color="primary" onClick={ () => new FullScreenDialog()}>Areas</Button>
            </>
            )
    }
}
export default MapLogic;