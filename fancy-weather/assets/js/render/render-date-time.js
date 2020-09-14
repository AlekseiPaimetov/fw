class RenderDateTime {
    constructor (messages) {
        this._messages = messages;
        this.timeId =  null;
        this.dateId =  null;
        this.days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
        this.mounths = ['jan','feb', 'mar', 'apr', 'may', 'jun', 'jul','aug','sep','oct','nov','dec']
        this.msSeparatorValues = {
            0 : '<div style="display: inline-block; width: 10px; text-align: center">:</div>',
            1 : '<div style="display: inline-block; width: 10px"></div>'
        };
        this.hmSeparatorValues = {
            0 : '<div style="display: inline-block; width: 10px; text-align: center">:</div>',
            1 : '<div style="display: inline-block; width: 10px"></div>'
        }
    }

    draw (lang = "EN") {
        this.drawDate (lang);
        this.drawTime ();
    }

    drawTime () {
        if (this.timeId != null) {
            clearInterval(this.timeId);
            this.timeId = null;
        }

        this.timeId = setInterval(this.updateTime.bind(this), 1000);
        this.updateTime();
    }

    updateTime () {
        const date = new Date();
        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();
        hours.innerText = h < 10 ? '0' + h : h;
        minutes.innerText = m < 10 ? '0' + m : m;
        seconds.innerText = s  < 10 ? '0' + s : s;
        hmSeparator.innerHTML = this.hmSeparatorValues[Math.trunc(s/59)] || this.hmSeparatorValues['default'];
        msSeparator.innerHTML = this.msSeparatorValues[s%2];
    }

    drawDate (lang = 'EN') {
        if (this.dateId != null) {
            clearInterval(this.dateId);
            this.dateId = null;
        }
        this.dateId = setInterval(this.updateDate.bind(this, lang), 1000);
        this.updateDate(lang);
    }

    updateDate(lang = 'EN') {
        const date = new Date();
        const langMessages = this._messages[lang];
        if (langMessages == null) 
        {
            console.log(`Messaged for language: '${lang}' not found.`)
            return;
        }
        const local = langMessages.get('local');

        if (local == null) {
            console.log(`Language for local: '${local}' not found.`)
            return;
        }
        const options = { weekday: 'short', month: 'long', day: 'numeric' , caseFirst: 'upper'};
        let getDate = (date.toLocaleString(local,options));
        let getDateArr= getDate.split(' ');
        const last = getDateArr[0].slice(-1);
        if (last == ',') {
            const newShortName = getDateArr[0].slice(0,-1);
            getDateArr[0]=newShortName;
        }
        const resArr= getDateArr.map(el => el[0].toUpperCase() + el.slice(1));
        fullDate.innerText = resArr.join(' ');
        const d1 =  new Date();
        d1.setDate(date.getDate() + 1);
        const d2 =  new Date();
        d2.setDate(date.getDate() + 2);
        const d3 =  new Date();
        d3.setDate(date.getDate() + 3);

        const weekdayOpt = {weekday: 'long'}
        const day1 = d1.toLocaleString(local, weekdayOpt);
        day1Name.innerText = day1[0].toUpperCase() + day1.slice(1);
        const day2 = d2.toLocaleString(local, weekdayOpt);
        day2Name.innerText = day2[0].toUpperCase() + day2.slice(1);
        const day3 = d3.toLocaleString(local, weekdayOpt);
        day3Name.innerText = day3[0].toUpperCase() + day3.slice(1);
    }
}