class ImageService {

    constructor() {
        this.accessKey = 'RlYzDajuCsFmvyX_aZ4aUuxHqM-i-ECSMj9lidELV40';
        this.secretKey = 'Ccj-R6F_TXZrpHDHjX22Pt9N2vqpGgZxtk10UiYiHzM';
        this.applicationName= 'Fancy-weather';
    }

    async setBgImage() {
        if (spin.classList.contains('fa-spin')) {
            spin.classList.remove('fa-spin');
        }
        spin.classList.add('fa-spin');

        let imgDownloaded = false;
        if (this.timeId != null) {
            clearInterval(this.timeId);
            this.timeId = null;
        }

        const timeId = setInterval(() => {
            if (imgDownloaded) {
                spin.classList.remove('fa-spin');
                clearInterval(timeId);
            }
        }, 1000);
        
        let partOfDay = 'noon';
        const h = new Date().getHours();
        switch (true) {
            case h < 4:
                partOfDay = 'night';
                break;
            case h < 6:
                partOfDay = 'sunrise';
                break;    
            case h < 10:
                partOfDay = 'morning';
                break;
            case h < 18:
                partOfDay = 'noon';
                break;
            case h < 22:
                partOfDay = 'evening';
                break;
            default:
                partOfDay = 'night';
                break;        
        };
        let partOfYear = 'winter';
        const m = new Date().getMonth();
        switch (true) {
            case m < 2:
                partOfYear = 'winter';
                break;
            case m < 5:
                partOfYear = 'spring';
                break;    
            case m < 8:
                partOfYear = 'summer';
                break;
            case m < 11:
                partOfYear = 'autumn';
                break;
            default:
                partOfYear = 'winter';
                break;        
        };

        const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${partOfDay},city,nature&client_id=${this.accessKey}`;

        try {
            const res = await fetch(url);
            const json4ik =  await res.json();
            const imgUrl = json4ik.urls.full;

            const img = new Image();
            img.onload = function () {
                document.body.classList.remove('spinner-border');
                document.body.style.backgroundImage = `url('${this.src}')`;
                imgDownloaded = true;
            }
            img.src = imgUrl;
        }
        catch (exp) {
            console.log('Problem with fetch background image: ',exp);
        }
        finally {

        }
    }
}