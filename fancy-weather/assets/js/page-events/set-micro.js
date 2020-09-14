class SetMicro {
    constructor() {
        var recognition = new webkitSpeechRecognition();
        
        microBu.addEventListener('click', (event) => {
            const lang = settings.language;
            const currentLangMessages = messages.messages[lang];
            recognition.lang = currentLangMessages.get('local');
            recognition.start();
        });

        recognition.onresult = function(event) {
            var result = event.results[event.resultIndex];
                if (result.isFinal) {
                    if ((result[0].transcript.toLowerCase() =='погода'  && settings.language == 'RU')
                        || (result[0].transcript.toLowerCase() =='weather' && settings.language == 'EN'))
                        {
                            speakerBu.click();
                            return;
                        }
                    searchInput.value = result[0].transcript;
                    searchBu.click();
                } else {
                    
                    searchInput.innerText = result[0].transcript;
                }
        }
    }
}