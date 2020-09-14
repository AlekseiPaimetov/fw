class SetFindCity {
    constructor () {
        searchBu.addEventListener('click', (event) => {
            if (searchInput.value == '') {
                return;
            }
            imageService.setBgImage();
            this.findCityAndSet(searchInput.value, true)
        });

        searchInput.addEventListener('keydown', (event) => {
            if (event.keyCode === 13) {
                searchBu.click();
            }
        });
    }

    findCityAndSet (cityName, refreshBg = false) {

                const cityCoordsPromise = cityService.getCoordsByCity(cityName, settings.language);

                cityCoordsPromise.then(function(result) {
                    try {
                        if (result.status.code != 200) {
                            alert('Problem to get info from https://api.opencagedata.com/');
                            return;
                        }
                        if (result.results.length == 0) {
                            alert('City was not found: ', cityName)
                            return;
                        }
                        const coor = {
                            latitude: result.results[0].geometry.lat,
                            longitude: result.results[0].geometry.lng,
                        }

                        mapService.setMap(coor);
                        if (refreshBg) {
                            imageService.setBgImage();
                        }
                        let city = typeof result.results[0].components.city === 'undefined'
                            ? result.results[0].components.state
                            : result.results[0].components.city;

                        renderLocation.render({
                            latitude: coor.latitude,
                            longitude: coor.longitude,
                            city: city,
                            country: result.results[0].components.country
                        });

                        weatherService.setWeather(coor, settings);
                        renderText.draw(settings.language);
                        renderDateTime.draw(settings.language);
                    }
                    catch(e) {
                        console.log('There is an error when the app is running: ', e);
                    }
                },function(rejectResult) {
                    alert('Oops! Some problems with site https://api.opencagedata.com/');
                    console.log('Some problems with site https://api.opencagedata.com/ : ',rejectResult);
                });
    }
}