class RenderText {
    constructor (messages) {
        this._messages = messages;
    }

    draw (lang) {
        const langMessages = this._messages[lang];
        if (langMessages == null) 
        {
            console.log(`Messaged for language: '${lang}' not found.`)
            return;
        }
        
        dropdownMenuButton.innerText = langMessages.get(lang);
        ruSelectBu.innerText = langMessages.get('RU');
        engSelectBu.innerText = langMessages.get('EN');
        beSelectBu.innerText = langMessages.get('BE');

        searchBu.innerText = langMessages.get('search');
        searchInput.placeholder = langMessages.get('searchPlaceholder');

        feelsLike.innerText = langMessages.get('feelsLike');
        wind.innerText = langMessages.get('wind');
        humidity.innerText = langMessages.get('humidity');
        speed.innerText = langMessages.get('speed');

        latitude.innerText = langMessages.get('latitude');
        longitude.innerText = langMessages.get('longitude');
    }
}