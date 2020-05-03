import React from 'react';
import { Marker, Popup, Polyline } from 'react-leaflet'; 
import MarkerClusterGroup from 'react-leaflet-markercluster';
import Dialog from '../../Dialog/Dialog';
import { iconRoute, } from '../icons/Icons';

const Routes = (props) => {
    
    //Function to reverse positions to lat long coordinates.
    const reverseLongLatCoordinates = (longLatPositions) => {
        let latLongPositions = [];
        for (let i=0;i< longLatPositions.length;i++)
            { latLongPositions[i] = [longLatPositions[i][1],longLatPositions[i][0]] }
        return latLongPositions; //returns array in latlong coordinates.                              
    }

    return(
        <>
            <MarkerClusterGroup>
            { props.visible  && props.routes.map((route,index) => (
                <div key={index}>
                    <Marker
                        icon={iconRoute}
                        key={route.properties.Name}
                        position={[route.geometry.coordinates.slice(-1)[0][1],route.geometry.coordinates.slice(-1)[0][0]]}>
                        <Popup position={[route.geometry.coordinates[1],route.geometry.coordinates[0]]}>
                            <div>
                                <h3>{route.properties.Name}</h3>
                                <p>{route.properties.Description}</p>
                                <Dialog  
                                    type = {route.properties.InfoType}
                                    name={route.properties.Name}
                                    description={route.properties.Description}
                                />
                            </div>
                        </Popup>
                    </Marker>
                    <Polyline 
                        positions = {reverseLongLatCoordinates(route.geometry.coordinates) }
                        color = {'purple'}
                        weight={7}
                        dasharray="5,5"
                        opacity={0.75}
                        smoothFactor={1}
                    >
                        <Popup position={[route.geometry.coordinates[1],route.geometry.coordinates[0]]}>
                            <div>
                                <h3>{route.properties.Name}</h3>
                                <p>{route.properties.Description}</p>
                                <Dialog />
                            </div>
                        </Popup>
                    </Polyline>
                    
                </div>
                ))
            }
            </MarkerClusterGroup>
        </> 
)//return
}
export default Routes;
