import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { iconLocation, } from '../icons/Icons';
//import volcanoPhoto from '../../../media/img/routevolcano.jpeg';
import Dialog from '../../Dialog/Dialog';

const Locations = (props) => {
    return(
        <MarkerClusterGroup>
            {props.visible &&  props.locations.map(location => (
                <Marker icon={iconLocation}
                        key={location.properties.Name} 
                        position={[location.geometry.coordinates[1],location.geometry.coordinates[0]]}>
                    <Popup
                        position={[location.geometry.coordinates[1],location.geometry.coordinates[0]]}>
                        <div>
                            <h3>{location.properties.Name}</h3>
                            <p>{location.properties.Description}</p>
                            <Dialog 
                                type = {location.properties.InfoType}
                                name={location.properties.Name} 
                                description={location.properties.Description}
                                //imgSrc={volcanoPhoto}
                            />                                                
                        </div>
                    </Popup>
                </Marker>
                            )
                        )
                }
        </MarkerClusterGroup>
    );
}

export default Locations;

