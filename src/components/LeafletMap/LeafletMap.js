import React from 'react';
import { Map, Marker, Popup, Polygon, Polyline, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import './leafletmap.css';

const LeafletMap = (props) => {
    function reverseLongLatCoordinates (longLatPositions) {
        let latLongPositions = [];
        for (let i=0;i< longLatPositions.length;i++)
            { latLongPositions[i] = [longLatPositions[i][1],longLatPositions[i][0]] }
        return latLongPositions; //returns array in latlong coordinates.                              
    };
	

    if (props.showLocations) {
        console.log('es verdadero');
    }
    else{
        console.log('es falso');
    }
    return (
        <>
        <div className="leaflet-container">
        <Map attributionControl={false} center={props.center} zoom={props.zoom} > 
            <TileLayer url={props.url} /> 
            <MarkerClusterGroup>
            {/* LOADING ALL MARKERS INSIDE A MARKERCLUSTERGROUP*/}
            {props.showLocations &&  props.locations.map( location => (
                    <Marker key={location.properties.Name} 
                        position={[location.geometry.coordinates[1],location.geometry.coordinates[0]]}>
                        <Popup
                            position={[location.geometry.coordinates[1],location.geometry.coordinates[0]]}>
                            <div>
                                <h3>{location.properties.Name}</h3>
                                <p>{location.properties.Description}</p>                                                   
                            </div>
                        </Popup>
                    </Marker>
                           )
                        )
                }
            </MarkerClusterGroup>
            {/* LOADING ALL ROUTES */}
            { props.showRoutes && props.routes.map(route => (
                <Polyline 
                    key={route.properties.Name} 
                    attribution="Rutas de las region"
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
                        </div>
                    </Popup>
                </Polyline>))
            }
            {/* map() to load Polygon (areas) elements.*/}
            {props.showAreas && props.areas.map(area => (
                <Polygon 
                    key={area.properties.Name} 
                    positions = {reverseLongLatCoordinates(area.geometry.coordinates)}>
                    
                    <Popup position={[area.geometry.coordinates[1], area.geometry.coordinates[0]]}>
                        <div>
                            <h3>{area.properties.Name} </h3>
                                <p>{area.properties.Description}</p>
                        </div>
                    </Popup>
                </Polygon>))
            }
        </Map>
        </div>
    </>
    )
};
export default LeafletMap;