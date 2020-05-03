import React from 'react';
import {Polygon, Popup} from 'react-leaflet';
import Dialog from '../../Dialog/Dialog';
import { iconAvalanche } from '../icons/Icons';

const AvalancheAreas = props => {
    const reverseLongLatCoordinates = (longLatPositions) => {
        let latLongPositions = [];
        for (let i=0;i< longLatPositions.length;i++)
            { latLongPositions[i] = [longLatPositions[i][1],longLatPositions[i][0]] }
        return latLongPositions; //returns array in latlong coordinates.                              
    }

    return (
        <>
            { props.visible && props.avalancheAreas.map(avalancheArea => (
                
         
                <Polygon
                    color = {'red'}
                    weight={1}
                    dasharray="5,5"
                    icon={iconAvalanche}
                    key={avalancheArea.properties.Name} 
                    positions = {reverseLongLatCoordinates(avalancheArea.geometry.coordinates)}>
                    <Popup position={[avalancheArea.geometry.coordinates[1], avalancheArea.geometry.coordinates[0]]}>
                        <div>
                            <h3>{avalancheArea.properties.Name} </h3>
                            <p>{avalancheArea.properties.Description}</p>
                            <Dialog />
                        </div>
                    </Popup>
                </Polygon>
                ))
            }
    </>
    );
}
export default AvalancheAreas;

