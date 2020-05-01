import React from 'react';
import {Polygon, Popup} from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import Dialog from '../../Dialog/Dialog';

const Areas = (props) => {
    const reverseLongLatCoordinates = (longLatPositions) => {
        let latLongPositions = [];
        for (let i=0;i< longLatPositions.length;i++)
            { latLongPositions[i] = [longLatPositions[i][1],longLatPositions[i][0]] }
        return latLongPositions; //returns array in latlong coordinates.                              
    }
    return (
        <MarkerClusterGroup>
        {props.visible && props.areas.map(area => (
            <Polygon 
                key={area.properties.Name} 
                positions = {reverseLongLatCoordinates(area.geometry.coordinates)}>
                <Popup position={[area.geometry.coordinates[1], area.geometry.coordinates[0]]}>
                    <div>
                        <h3>{area.properties.Name} </h3>
                        <p>{area.properties.Description}</p>
                        <Dialog />
                    </div>
                </Popup>
            </Polygon>
            ))
        }
        </MarkerClusterGroup>
    ) //closes return;
}
export default Areas;

