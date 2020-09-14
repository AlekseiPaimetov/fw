const temperatureUnitConverter = new TemperatureUnitConverter();

const messages = new Messages();
const settings = new Settings();

const renderText = new RenderText(messages.messages);
const renderDateTime = new RenderDateTime(messages.messages);
const renderLocation = new RenderLocation();

const imageService = new ImageService();
const locationService = new LocationService();
const weatherService = new WeatherService();
const mapService = new MapService();
const cityService = new CityService();

const setFindCity = new SetFindCity();
const setLanguageChangeEvents = new SetChangeLanguageEvents(settings, renderText, renderDateTime, setFindCity);
const setRefreshBgImage = new SetRefreshBgImage(imageService);
const setChangeTemperatureUnit = new SetChangeTemperatureUnit(settings,temperatureUnitConverter);
const setMicro = new SetMicro();
const setSpeaker = new SetSpeaker();

const userLocationPromice = locationService.getUserInfo();

userLocationPromice.then(function(result) {
    setFindCity.findCityAndSet(result.city, true);
});
