import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import './leafletmap.css';
import Locations from './Locations/Locations';
import Routes from './Routes/Routes';
import Areas from './Areas/Areas';


const LeafletMap = (props) => {
    
    return (
        <>
            <Map attributionControl={false} center={props.center} zoom={props.zoom} > 
                <TileLayer url={props.url} /> 
                <Locations visible={props.showLocations} locations={props.locations}></Locations>
                <Routes visible={props.showRoutes} routes={props.routes}></Routes>
                <Areas visible={props.showAreas} areas={props.areas}></Areas>
            </Map>
        </>
    )//Closes return.
};
export default LeafletMap;