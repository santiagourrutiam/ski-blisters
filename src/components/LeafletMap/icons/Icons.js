import L from 'leaflet';


const iconVolcano = new L.Icon({
    iconUrl: require('./volcano4.svg'),
    iconRetinaUrl: require('./volcano4.svg'),
    iconAnchor: null,
    popupAnchor: [0, -20],
    shadowUrl: null,
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
    iconSize: [40,40],
});

const iconSkiShop = new L.Icon({
    iconUrl: require('./business.svg'),
    iconRetinaUrl: require('./business.svg'),
    iconAnchor: null,
    popupAnchor: [0, -20],
    shadowUrl: null,
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
    iconSize: [40,40],
});

const iconRoute = new L.Icon({
    iconUrl: require('./route.svg'),
    iconRetinaUrl: require('./route.svg'),
    iconAnchor: [10, 50],
    popupAnchor: [0, -20],
    shadowUrl: null,
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
    iconSize: [40,40],
});

const iconAvalanche = new L.Icon({
    iconUrl: require('./avalanche.svg'),
    iconRetinaUrl: require('./avalanche.svg'),
    iconAnchor: null,
    popupAnchor: [0, -20],
    shadowUrl: null,
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
    iconSize: [40,40],
});

export { iconVolcano, iconRoute, iconSkiShop, iconAvalanche };