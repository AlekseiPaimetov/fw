class RenderLocation {
    constructor() {
    }

    async render (locationInfo) {
        if (locationInfo == null) {
            locationInfo = await locationService.getUserInfo();
        }

        latitudeValue.innerText = locationInfo.latitude;
        longitudeValue.innerText = locationInfo.longitude;
        city.innerText = locationInfo.city.toUpperCase();
        country.innerText = locationInfo.country.toUpperCase();
    }
}