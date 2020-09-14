class LocationService {
    constructor(setFindCity) {
        this.setFindCity = setFindCity;
        this.accessToken = "0c24344b093eca";
        this.locationUrl = "https://ipinfo.io?token=" + this.accessToken;
        this.locationUrl2 = "https://json.geoiplookup.io/"
    }

    async getUserInfo() {
        try {
            const res = await fetch(this.locationUrl);
            const data = await res.json();
            const arrayOfCoords = data.loc.split(',');
            return {
                latitude: arrayOfCoords[0], 
                longitude: arrayOfCoords[1], 
                city: data.city,
                country: data.country
            };
        }
        catch(ex) {
            console.log(`Error fetch data from ${this.locationUrl}: `, ex);
        }
    }

    async getUserCoordinats2() {
        try {
            const res = await fetch(this.locationUrl2);
            const data = await res.json();
            return {latitude: data.latitude, longitude: data.longitude};
        }
        catch {
            console.log(`Error fetch data from ${this.locationUrl}`);
        }
    }

    // renderLocation(coordinats = null) {
    //     if (coordinats == null) {
    //         await this.getUserInfo();
    //         return;
    //     }
        
    //     latitudeValue.innerText = coordinats.latitude;
    //     longitudeValue.innerText = coordinats.longitude;
    //     city.innerText = coordinats.city.toUpperCase();
    //     country.innerText = coordinats.country.toUpperCase();
    // }
}