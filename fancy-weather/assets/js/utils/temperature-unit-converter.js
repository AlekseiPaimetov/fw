class TemperatureUnitConverter {
 
    CtoF(temperature) {
        return Math.round((temperature * 9 / 5) + 32);
    }

    FtoC(temperature) {
        return Math.round((temperature - 32) * 5 / 9);
    }
}