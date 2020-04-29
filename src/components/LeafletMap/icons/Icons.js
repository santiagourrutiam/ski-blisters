import L from 'leaflet';


const iconLocation = new L.Icon({
    iconUrl: require('./volcano.svg'),
    iconRetinaUrl: require('./volcano.svg'),
    iconAnchor: null,
    popupAnchor: [0, -20],
    shadowUrl: null,
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
    iconSize: [50,50],
});

const iconRoute = new L.Icon({
    iconUrl: require('./route.svg'),
    iconRetinaUrl: require('./route.svg'),
    iconAnchor: [0, 60],
    popupAnchor: [0, -20],
    shadowUrl: null,
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
    iconSize: [50,50],
});

export { iconLocation, iconRoute  };