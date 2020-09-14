
class Settings {

    constructor() {
        const lang = localStorage.getItem('lang');
        if (!lang) {
            this._language = 'EN';
            localStorage.setItem('lang', 'EN')
        }
        else {
            this._language = lang;
        }
        
        const temperatureUnit = localStorage.getItem('temperatureUnit');
        if (!temperatureUnit) {
            this._temperatureUnit = 'C';
            localStorage.setItem('temperatureUnit', 'C')
        }
        else {
            this._temperatureUnit = temperatureUnit;
        }
    }

    get language() {
        if (!this._language) {
            let lang = localStorage.getItem('lang');
            if (!lang) {
                this._language = 'EN';
                localStorage.setItem('lang', 'EN')
            }
        }   

        return this._language;
    }

    set language(value) {
        if (value !== 'EN' && value !== 'RU' && value !== 'BE') {
            return;
        }

        this._language = value;
        localStorage.setItem('lang', value);
    }

    get temperatureUnit() {
        if (!this._temperatureUnit) {
            let temperatureUnit = localStorage.getItem('temperatureUnit');
            if (!temperatureUnit) {
                this._temperatureUnit = 'C';
                localStorage.setItem('temperatureUnit', 'F')
            }
        }   

        return this._temperatureUnit;
    }

    set temperatureUnit(value) {
        if (value !== 'C' && value !== 'F') {
            return;
        }

        this._temperatureUnit = value;
        localStorage.setItem('temperatureUnit', value);
    }

}

