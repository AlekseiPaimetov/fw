class Messages {
    constructor() {
        this._ruMessages = new Map();
        this._ruMessages.set('RU', 'РУС');
        this._ruMessages.set('EN', 'АНГЛ');
        this._ruMessages.set('BE', 'БЕЛ');
        this._engMessages = new Map();
        this._engMessages.set('RU', 'RU');
        this._engMessages.set('EN', 'EN');
        this._engMessages.set('BE', 'BE');
        this._beMessages = new Map();
        this._beMessages.set('RU', 'РУС');
        this._beMessages.set('EN', 'АНГЛ');
        this._beMessages.set('BE', 'БЕЛ');

        this._ruMessages.set('search', 'ПОИСК');
        this._engMessages.set('search', 'SEARCH');
        this._beMessages.set('search', 'ПОШУК');

        this._ruMessages.set('searchPlaceholder', 'Поиск по городу или ZIP');
        this._engMessages.set('searchPlaceholder', 'Search city or ZIP');
        this._beMessages.set('searchPlaceholder', 'Пошук па горадзе або ZIP');

        this._ruMessages.set('latitude', 'Широта: ');
        this._engMessages.set('latitude', 'Latitude: ');
        this._beMessages.set('latitude', 'Широта: ');
        this._ruMessages.set('longitude', 'Долгота: ');
        this._engMessages.set('longitude', 'Longitude: ');
        this._beMessages.set('longitude', 'Долгота: ');

        this._ruMessages.set('feelsLike', 'ОЩУЩАЕТЬСЯ КАК: ');
        this._engMessages.set('feelsLike', 'FEELS LIKE: ');
        this._beMessages.set('feelsLike', 'АДЧУВАЕЦЦА ЯК: ');
        this._ruMessages.set('wind', 'ВЕТЕР: ');
        this._engMessages.set('wind', 'WIND: ');
        this._beMessages.set('wind', 'ВЕЦЕР: ');
        this._ruMessages.set('speed', ' м/с');
        this._engMessages.set('speed', ' m/s');
        this._beMessages.set('speed', ' м/с');
        this._ruMessages.set('humidity', 'ВЛАЖНОСТЬ: ');
        this._engMessages.set('humidity', 'HUMIDITY: ');
        this._beMessages.set('humidity', 'ВІЛЬГОТНАСЦЬ: ');

        this._ruMessages.set('mon', 'Пнд ');
        this._engMessages.set('mon', 'Mon ');
        this._beMessages.set('mon', 'Пон ');
        this._ruMessages.set('tue', 'Втр ');
        this._engMessages.set('tue', 'Tue ');
        this._beMessages.set('tue', 'Аўт ');
        this._ruMessages.set('wed', 'Срд ');
        this._engMessages.set('wed', 'Wed ');
        this._beMessages.set('wed', 'Сер ');
        this._ruMessages.set('thu', 'Чтв ');
        this._engMessages.set('thu', 'Thu ');
        this._beMessages.set('thu', 'Чцв ');
        this._ruMessages.set('fri', 'Птн ');
        this._engMessages.set('fri', 'Fri ');
        this._beMessages.set('fri', 'Пят ');
        this._ruMessages.set('sat', 'Сбт ');
        this._engMessages.set('sat', 'Sat ');
        this._beMessages.set('sat', 'Суб ');
        this._ruMessages.set('sun', 'Вск ');
        this._engMessages.set('sun', 'Sun ');
        this._beMessages.set('sun', 'Няд ');

        this._ruMessages.set('jan', 'Январь ');
        this._engMessages.set('jan', 'January ');
        this._beMessages.set('jan', 'Студзень ');
        this._ruMessages.set('feb', 'Февраль ');
        this._engMessages.set('feb', 'February ');
        this._beMessages.set('feb', 'Люты ');
        this._ruMessages.set('mar', 'Март ');
        this._engMessages.set('mar', 'March ');
        this._beMessages.set('mar', 'Сакавiк ');
        this._ruMessages.set('apr', 'Апрель ');
        this._engMessages.set('apr', 'April ');
        this._beMessages.set('apr', 'Красавiк ');
        this._ruMessages.set('may', 'Май ');
        this._engMessages.set('may', 'May ');
        this._beMessages.set('may', 'Май ');
        this._ruMessages.set('jun', 'Июнь ');
        this._engMessages.set('jun', 'June ');
        this._beMessages.set('jun', 'Червень ');
        this._ruMessages.set('jul', 'Июль ');
        this._engMessages.set('jul', 'July ');
        this._beMessages.set('jul', 'Лiпень ');
        this._ruMessages.set('aug', 'Август ');
        this._engMessages.set('aug', 'August ');
        this._beMessages.set('aug', 'Жнiвень ');
        this._ruMessages.set('sep', 'Сентябрь ');
        this._engMessages.set('sep', 'September ');
        this._beMessages.set('sep', 'Верасень ');
        this._ruMessages.set('oct', 'Октябрь ');
        this._engMessages.set('oct', 'October ');
        this._beMessages.set('oct', 'Кастрычнiк ');
        this._ruMessages.set('nov', 'Ноябрь ');
        this._engMessages.set('nov', 'November ');
        this._beMessages.set('nov', 'Лiстапад ');
        this._ruMessages.set('dec', 'Декабрь ');
        this._engMessages.set('dec', 'December ');
        this._beMessages.set('dec', 'Снежань ');

        this._ruMessages.set('local','ru-RU');
        this._engMessages.set('local', 'en-GB');
        this._beMessages.set('local', 'be');
    }

    get messages() {
        return {
            'RU' : this._ruMessages,
            'EN' : this._engMessages,
            'BE' : this._beMessages
        }
    }
}