import React from 'react';
import {Polygon, Popup} from 'react-leaflet';
import Dialog from '../../Dialog/Dialog';

const Areas = props => {
    const reverseLongLatCoordinates = (longLatPositions) => {
        let latLongPositions = [];
        for (let i=0;i< longLatPositions.length;i++)
            { latLongPositions[i] = [longLatPositions[i][1],longLatPositions[i][0]] }
        return latLongPositions; //returns array in latlong coordinates.                              
    }
    return (
        <>
        { props.visible && props.localAreas.map(area => (
            <Polygon 
                key={area.properties.Name} 
                positions = {reverseLongLatCoordinates(area.geometry.coordinates)}>
                <Popup position={[area.geometry.coordinates[1], area.geometry.coordinates[0]]}>
                    <div>
                        <h3>{area.properties.Name} </h3>
                        <p>{area.properties.Description}</p>
                        <Dialog 
                            type = {area.properties.InfoType}
                            name={area.properties.Name}
                            description={area.properties.Description}
                            orientation={area.properties.Orientation}
                            imgSrc={area.properties.ImgSrc}
                            comments={area.properties.Comments}
                        />
                    </div>
                </Popup>
            </Polygon>
            ))
        }
        </>
    )
}
export default Areas;

