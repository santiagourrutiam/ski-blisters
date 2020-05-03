import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { iconVolcano, } from '../icons/Icons';
import Dialog from '../../Dialog/Dialog';

const Volcanos = (props) => {
    return(
        <MarkerClusterGroup>
            {props.visible &&  props.volcanos.map(volcano => (
                <Marker 
                    riseOnHover={true}
                    title={volcano.properties.Name}
                    icon={iconVolcano}
                        key={volcano.properties.Name} 
                        position={[volcano.geometry.coordinates[1],volcano.geometry.coordinates[0]]}>
                    <Popup
                        position={[volcano.geometry.coordinates[1],volcano.geometry.coordinates[0]]}>
                        <div>
                            <h3>{volcano.properties.Name}</h3>
                            <p>{volcano.properties.Description}</p>
                            <Dialog 
                                type = {volcano.properties.InfoType}
                                name={volcano.properties.Name} 
                                description={volcano.properties.Description}
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

export default Volcanos;

