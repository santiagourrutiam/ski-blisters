import React, { Component } from 'react';
import Backcountry from './backcountry_beta.json';
import { Map, Marker, Popup, Polygon, TileLayer, Polyline } from "react-leaflet";
import MarkerClusterGroup from 'react-leaflet-markercluster';
import 'react-leaflet-markercluster/dist/styles.min.css';
import { Typography } from '@material-ui/core';

class MapLogic extends Component {
    state = {
        mapCenter       : [-38.38, -71.60],
        zoomLevel       : 13.5,
        tileLayerUrl    : 'https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=62bae950ae134822a4c875db79d87cf1',
        locations       : Backcountry.features.filter(location => location.properties.InfoType === 'location'),
        routes          : Backcountry.features.filter(route => route.properties.InfoType === 'route'),
        areas           : Backcountry.features.filter(area => area.properties.InfoType === 'area'),
        }

    reverseLongLatCoordinates (longLatPositions) {
        let latLongPositions = [];
        let i;
        for (i=0;i<longLatPositions.length;i++)
            {
                latLongPositions[i] = [longLatPositions[i][1],longLatPositions[i][0]];
            }
        return latLongPositions; //Array in latlong coordinates.                              
    }

    render() {
        return (
        <Map attributionControl={false} center={this.state.mapCenter} zoom={this.state.zoomLevel}>
            <TileLayer url={ this.state.tileLayerUrl} />
            <MarkerClusterGroup>
            {/* map() markers (Locations) elements inside the MarkerClusterGroup element called in previous line.*/}
            { this.state.locations.map(location => 
                <Marker position={[location.geometry.coordinates[1],location.geometry.coordinates[0]]}>
                    <Popup position={[location.geometry.coordinates[1],location.geometry.coordinates[0]]}
                        maxWidth={300} minWidth={100}>
                        <div>
                            <Typography variant="h4" gutterBottom="true" component="h4" align="right" color="primary">
                                {location.properties.Name}<br/><br/>
                            </Typography>
                            <Typography variant="h6" gutterBottom="true" component="h6" align="left" variant="caption" color="textPrimary">
                                {location.properties.Description}
                            </Typography>
                        </div>
                    </Popup>
                </Marker>)
            }
            {/* map() to load Polyline (Routes) elements.*/}
            { this.state.routes.map(route => (
                <Polyline 
                    key={route.properties.Name} 
                    positions = { this.reverseLongLatCoordinates(route.geometry.coordinates)  }
                    color = {'purple'}
                    weight={8}
                    lineCap={'butt'}
                    opacity={0.75}
                    smoothFactor={1}
                    onClick = { () => console.log(route.properties.Name)}>
                        <Popup
                            position={[route.geometry.coordinates[1],route.geometry.coordinates[0]]}
                            maxWidth={300} minWidth={100}>
                            <div>
                                <Typography variant="p2" gutterBottom="true" component="p2" align="left" color="primary">
                                    {route.properties.Name}<br/>
                                </Typography>
                                <Typography variant="p1" gutterBottom="true" component="p1" align="center" variant="caption" color="textPrimary">
                                    {route.properties.Description}
                                </Typography>
                            </div>
                        </Popup>
                </Polyline>))}
            </MarkerClusterGroup>
            {/* map() to load Polygon (areas) elements.*/}
            {this.state.areas.map(area => (
                <Polygon positions = {this.reverseLongLatCoordinates(area.geometry.coordinates)}>
                    <Popup position={[area.geometry.coordinates[1], area.geometry.coordinates[0]]}
                                maxWidth={300} minWidth={100}>
                        <div>
                            <Typography variant="p2" gutterBottom="true" component="p2" align="left" color="primary">
                                {area.properties.Name}<br/>
                            </Typography>
                             <Typography variant="p1" gutterBottom="true" component="p1" align="center" variant="caption" color="textPrimary">
                                {area.properties.Description}
                            </Typography>
                        </div>
                    </Popup>
                </Polygon>))
            }
        </Map>)
    }
}
export default MapLogic;