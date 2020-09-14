class SetSpeaker {
    constructor() {
        

        speakerBu.addEventListener('click', (event) => {
            let s = this.setSpeech();
            s.then((voices) => {
    
                let voiceNumber = 4;
                let postfix = settings.temperatureUnit == 'C'
                        ? 'degrees Celsius.'
                        : 'degrees Fahrenheit.'
                let text = `The weather in ${city.innerText} is ${weatherType.innerText}. Temperature is ${temperature.innerText} ${postfix}`;
                if (settings.language == 'RU') {
                    voiceNumber = 17;
                    postfix = settings.temperatureUnit == 'C'
                        ? 'граудсов Цельсия.'
                        : 'градусов Фаренгейта.'
                    text = `Сейчас в ${city.innerText}е ${weatherType.innerText}. Температура ${temperature.innerText} ${postfix}`
                }
    
                var utterance = new SpeechSynthesisUtterance(text);
                utterance.voice = voices[voiceNumber];
                speechSynthesis.speak(utterance);
            });
        })
    }

    setSpeech() {
        return new Promise(
            function (resolve, reject) {
                let synth = window.speechSynthesis;
                let id;
    
                id = setInterval(() => {
                    if (synth.getVoices().length !== 0) {
                        resolve(synth.getVoices());
                        clearInterval(id);
                    }
                }, 10);
            }
        )
    }
    
}