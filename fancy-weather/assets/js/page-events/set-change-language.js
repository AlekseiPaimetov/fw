class SetChangeLanguageEvents {
    constructor(settings, renderText, renderDateTime, setFindCity) {
        const menu = document.getElementById('dropdownMenuLang');
        menu.addEventListener('click', (event) => {
            const buId=event.target.id;
            
            if (buId != null && buId.toString().length > 2)
            {
                const lang = buId.substr(0,2).toUpperCase();
                renderText.draw(lang);
                renderDateTime.drawDate(lang);
                settings.language = lang;
                setFindCity.findCityAndSet(city.innerText);
            }
        })
    }
}
