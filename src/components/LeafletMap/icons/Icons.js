import L from 'leaflet';


const iconLocation = new L.Icon({
    iconUrl: require('./location4.svg'),
    iconRetinaUrl: require('./location4.svg'),
    iconAnchor: null,
    popupAnchor: [0, -20],
    shadowUrl: null,
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
    iconSize: [30,40],
});

const iconRoute = new L.Icon({
    iconUrl: require('./route3.svg'),
    iconRetinaUrl: require('./route3.svg'),
    iconAnchor: [10, 70],
    popupAnchor: [0, -20],
    shadowUrl: null,
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
    iconSize: [40,40],
});

export { iconLocation, iconRoute  };