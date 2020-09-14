class SetChangeTemperatureUnit {
    constructor(settings, temperatureUnitConverter) {
        if (settings.temperatureUnit == 'F') {
            fDegree.classList.add('active')
        }

        if (settings.temperatureUnit == 'C') {
            cDegree.classList.add('active')
        }

        fDegree.addEventListener('click', (event) => {
            if (fDegree.classList.contains('active') || temperature.innerText == '') {
                return;
            }

            fDegree.classList.add('active')
            cDegree.classList.remove('active');
            settings.temperatureUnit = 'F';

            temperature.innerText = temperatureUnitConverter.CtoF(temperature.innerText);
            feelsLikeValue.innerText = temperatureUnitConverter.CtoF(feelsLikeValue.innerText);
            day1Temperature.innerText = temperatureUnitConverter.CtoF(day1Temperature.innerText);
            day2Temperature.innerText = temperatureUnitConverter.CtoF(day2Temperature.innerText);
            day3Temperature.innerText = temperatureUnitConverter.CtoF(day3Temperature.innerText);
        });

        cDegree.addEventListener('click', (event) => {
            if (cDegree.classList.contains('active') || temperature.innerText == '') {
                return;
            }

            cDegree.classList.add('active')
            fDegree.classList.remove('active');
            settings.temperatureUnit = 'C';

            temperature.innerText = temperatureUnitConverter.FtoC(temperature.innerText);
            feelsLikeValue.innerText = temperatureUnitConverter.FtoC(feelsLikeValue.innerText);
            day1Temperature.innerText = temperatureUnitConverter.FtoC(day1Temperature.innerText);
            day2Temperature.innerText = temperatureUnitConverter.FtoC(day2Temperature.innerText);
            day3Temperature.innerText = temperatureUnitConverter.FtoC(day3Temperature.innerText);
        });


    }
}