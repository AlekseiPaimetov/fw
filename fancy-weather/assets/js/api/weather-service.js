class WeatherService {
    constructor () {
        this.apiKey = 'fe6c15d2372fc447041d0f5201a6f5d2';
        this.weatherUrl = 'http://api.openweathermap.org/data/2.5/forecast?';
        this.weatherIcoUrl = 'http://openweathermap.org/img/wn/';
        this.bigIco = '@4x.png';
        this.smallIco = '@2x.png';
    }

    async getWeather(location, settings) {
        if (location == null || settings == null) {
            return;
        }

        let url = '';
        if (location.latitude != null && location.longitude != null) {
            url = this.weatherUrl+`lat=${location.latitude}&lon=${location.longitude}&lang=${settings.language}&country=${settings.language}&units=metric&cnt=4&APPID=${this.apiKey}`;
        }
        else {
            url = this.weatherUrl+`q=${location.city}&lang=${settings.language}&country=${settings.language}&units=metric&cnt=4&APPID=${this.apiKey}`;
        }
        
        try {
            const res = await fetch(url);
            const weatherInfo =  await res.json();
            return weatherInfo;
        }
        catch (ex){
            console.log('Have  problem with get weather: ', ex)
        }

    }

    async setWeather(location, settings) {
        if (location == null) {
            console.log("Location doesn't send to weather method.");
            return;
        }
        if (settings == null) {
            console.log("Settings of application doesn't send to weather method.");
            return;
        }

        try {
            const weatherInfo = await this.getWeather(location, settings);
            if (weatherInfo.cod != 200) {
                console.log('Responce from weather API is not OK');
                return;
            }
    
            mainWeatherIco.src = this.weatherIcoUrl + weatherInfo.list[0].weather[0].icon + this.bigIco;
            day1Ico.src = this.weatherIcoUrl + weatherInfo.list[1].weather[0].icon + this.smallIco;
            day2Ico.src = this.weatherIcoUrl + weatherInfo.list[2].weather[0].icon + this.smallIco;
            day3Ico.src = this.weatherIcoUrl + weatherInfo.list[3].weather[0].icon + this.smallIco;
            //day1Ico.style.backgroundImage = this.weatherIcoUrl + weatherInfo.list[1].weather[0].icon + this.smallIco;

            const todayWeather  = weatherInfo.list[0];
            
            this.setTemperature(temperature,todayWeather.main.temp,settings);
            windValue.innerText = todayWeather.wind.speed;
            this.setTemperature(feelsLikeValue,todayWeather.main.feels_like,settings);
            humidityValue.innerText = todayWeather.main.humidity;
            weatherType.innerText = todayWeather.weather[0].description.toUpperCase();
            this.setTemperature(day1Temperature,weatherInfo.list[1].main.temp,settings);
            this.setTemperature(day2Temperature,weatherInfo.list[2].main.temp,settings);
            this.setTemperature(day3Temperature,weatherInfo.list[3].main.temp,settings);
        }
        catch (ex) {
            console.log('Problems to fetch weather data: ',ex);
        }
    }

    setTemperature(element, text, settings) {
        element.innerText =  settings.temperatureUnit == 'C'
            ? Math.round(text)
            : Math.round(temperatureUnitConverter.CtoF(text));
    }
}