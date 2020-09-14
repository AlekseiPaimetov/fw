class CityService {
    constructor() {
        this.apikey = '937c39d78f3b411dad77afefd3364c29';
        this.url = 'https://api.opencagedata.com/geocode/v1/json?q='
        this.postfix = `&key=${this.apikey}&pretty=1&no_annotations=1`;
    }

    async getCoordsByCity (city, lang='EN') {
        try {
            const url = this.url + city + `&language=${lang.toLowerCase()}`+ this.postfix;
            const responce = await fetch(url);
            const res = await responce.json();
            return res;
        }
        catch {
            console.log("Can't get coordinates by city name. Url: ", url);
        }
    }

    async getCoordsByZip (zip) {
        throw ("API service doesn't have endpoint for zip");
    }
}