import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Map, Marker, Popup, TileLayer, Polyline } from "react-leaflet";
// eslint-disable-next-line
import { Icon } from "leaflet";
import backcountry from "./backcountry_beta2.json";
import "./App.css";

import MarkerClusterGroup from 'react-leaflet-markercluster';
import 'react-leaflet-markercluster/dist/styles.min.css';
import { Typography } from '@material-ui/core';


//MAIN APPLICATION TO RENDER ELEMENTS IN THE LEAFLET MAP
export default function App () {

  let mapCenter = [-38.38, -71.60]
  let zoomLevel = 13.2
  
  const [activeBackcountry, setActiveBackcountry] = useState(null);

return (
  <div>
    <Map
      attributionControl={false} 
      className="markercluster-map"
      center={mapCenter} 
      zoom={zoomLevel}>
         <TileLayer
          url="https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=62bae950ae134822a4c875db79d87cf1"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
    <MarkerClusterGroup>
    {backcountry.features.map(location => (
    <Marker
      key={location.properties.Name} 
      position={[location.geometry.coordinates[1],
        location.geometry.coordinates[0]]}
      onClick={() => {
        setActiveBackcountry(location);
      }}
    />
    )
  )}
  
    {activeBackcountry && (
        <Popup
          position={[
            activeBackcountry.geometry.coordinates[1],
            activeBackcountry.geometry.coordinates[0]
          ]}
          maxWidth={500}
          minWidth={500}
          
          onClose={() => {
            setActiveBackcountry(null);
          }}
        >
          <div>
            <Typography variant="h4" gutterBottom="true" component="h4" align="right" color="primary">
            {activeBackcountry.properties.Name}<br/><br/></Typography>
            <Typography variant="h6" gutterBottom="true" component="h6" align="left" variant="caption" color="textPrimary">
            {activeBackcountry.properties.Description}
            
            </Typography>
          </div>
        </Popup>
    )}
    </MarkerClusterGroup>
</Map>
</div>
)
}