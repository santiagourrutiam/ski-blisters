import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { iconSkiShop, } from '../icons/Icons';
import Dialog from '../../Dialog/Dialog';

const SkiShops = (props) => {
    return(
        <MarkerClusterGroup>
            {props.visible &&  props.skiShops.map(skiShop => (
                <Marker icon={iconSkiShop}
                        key={skiShop.properties.Name} 
                        position={[skiShop.geometry.coordinates[1],skiShop.geometry.coordinates[0]]}>
                    <Popup
                        position={[skiShop.geometry.coordinates[1],skiShop.geometry.coordinates[0]]}>
                        <div>
                            <h3>{skiShop.properties.Name}</h3>
                            <p>{skiShop.properties.Description}</p>
                            <Dialog 
                                type = {skiShop.properties.InfoType}
                                name={skiShop.properties.Name} 
                                description={skiShop.properties.Description}
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
export default SkiShops;