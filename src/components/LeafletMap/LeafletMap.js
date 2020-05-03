import React from 'react';
import { Map, TileLayer, LayersControl } from 'react-leaflet';
import './leafletmap.css';
import AvalancheAreas from './AvalancheAreas/AvalancheAreas';
import Volcanos from './Volcanos/Volcanos';
import Routes from './Routes/Routes';
import Areas from './Areas/Areas';
import SkiShops from './SkiShops/SkiShops';
import 'react-leaflet-markercluster/dist/styles.min.css';

const LeafletMap = (props) => {
    return (
        <>
            <Map attributionControl={false} center={props.center} zoom={props.zoom} > 
                <TileLayer url={props.url} /> 
                <Volcanos visible={props.showVolcanos} volcanos={props.volcanos}></Volcanos>
                <Routes visible={props.showRoutes} routes={props.routes}></Routes>
                <Areas visible={props.showLocalAreas} localAreas={props.localAreas}></Areas>
                <SkiShops visible={props.showSkiShops} skiShops={props.skiShops}></SkiShops>
                <AvalancheAreas visible={props.showAvalancheAreas} avalancheAreas={props.avalancheAreas}></AvalancheAreas>
            
                <LayersControl position="bottomleft" collapsed={false} checked={true}>

                    <LayersControl.BaseLayer name="Satelital">
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                        />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name="ThunderForest Outdoors">
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=62bae950ae134822a4c875db79d87cf1"
                        />
                    </LayersControl.BaseLayer>  

                    <LayersControl.BaseLayer name="ThunderForest Landscape">
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=62bae950ae134822a4c875db79d87cf1"
                        />
                    </LayersControl.BaseLayer>  
                    
                </LayersControl>

            </Map>
        </>
    )//Closes return.
};
export default LeafletMap;