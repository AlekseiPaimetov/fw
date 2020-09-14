class MapService {
    constructor () {
        mapboxgl.accessToken = 'pk.eyJ1IjoibmVydi1lbXBsb3llZSIsImEiOiJja2VyN2sxNzcyejZsMnlucDZ0YnE0dWV4In0.uQ6qXbXuaT83gnuhOv9bVQ';
    }

    setMap(location) {
        if (location == null) {
            return;
        }

        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [location.longitude, location.latitude],
            zoom: 10
            });

        var marker = new mapboxgl.Marker()
        .setLngLat([location.longitude, location.latitude])
        .addTo(map);
    }
}