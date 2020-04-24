import React, { Component } from 'react';
import Backcountry from '../backcountry_beta.json';
import { Map, Marker, Popup, Polygon, TileLayer, Polyline } from "react-leaflet";
import MarkerClusterGroup from 'react-leaflet-markercluster';
import 'react-leaflet-markercluster/dist/styles.min.css';
import { Typography } from '@material-ui/core';

export default class MapLogic extends Component {
    
    state = {
        mapCenter       : [-38.392, -71.568],
        zoomLevel       : 13.1,
        tileLayerUrl    : 'https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=62bae950ae134822a4c875db79d87cf1',
        locations       : Backcountry.features.filter(location => location.properties.InfoType === 'location'),
        routes          : Backcountry.features.filter(route => route.properties.InfoType === 'route'),
        areas           : Backcountry.features.filter(area => area.properties.InfoType === 'area'),
        }

    reverseLongLatCoordinates (longLatPositions) {
        let latLongPositions = [];
        for (let i=0;i< longLatPositions.length;i++)
            { latLongPositions[i] = [longLatPositions[i][1],longLatPositions[i][0]] }
        return latLongPositions; //returns array in latlong coordinates.                              
    }

    render() {
        return (
        <Map attributionControl={false} center={this.state.mapCenter} zoom={this.state.zoomLevel}>
            <TileLayer url={ this.state.tileLayerUrl} />
            <MarkerClusterGroup>
                {/* map() markers (Locations) elements inside the MarkerClusterGroup element called in previous line.*/}
                { this.state.locations.map(location => (
                    <Marker key={location.properties.Name} position={[location.geometry.coordinates[1],location.geometry.coordinates[0]]}>
                        <Popup position={[location.geometry.coordinates[1],location.geometry.coordinates[0]]}
                            maxWidth={300} minWidth={100}>
                            <div>
                                <Typography variant="h5" gutterBottom="false" component="h5" align="right" color="primary" children={location.properties.Name} />
                                <Typography variant="h7" gutterBottom="true" component="h7" align="left" color="textPrimary" children={location.properties.Description}/>                                                   
                            </div>
                        </Popup>
                    </Marker>))
                }
            </MarkerClusterGroup>
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
                                <Typography variant="h5" gutterBottom="true" component="h5" align="left" color="primary" children={route.properties.Name} />
                                <Typography variant="h7" gutterBottom="true" component="h7" align="center" color="textPrimary" children={route.properties.Description} />
                            </div>
                        </Popup>
                </Polyline>))
            }
            {/* map() to load Polygon (areas) elements.*/}
            {this.state.areas.map(area => (
                <Polygon key={area.properties.Name} positions = {this.reverseLongLatCoordinates(area.geometry.coordinates)}>
                    <Popup position={[area.geometry.coordinates[1], area.geometry.coordinates[0]]}
                                maxWidth={300} minWidth={100}>
                        <div>
                            <Typography variant="h5" gutterBottom="true" component="h5" align="left" color="primary" children={area.properties.Name} />
                             <Typography variant="h7" gutterBottom="true" component="h7" align="center" color="textPrimary" children={area.properties.Description} />
                        </div>
                    </Popup>
                </Polygon>))
            }
        </Map>
        )
    }
}