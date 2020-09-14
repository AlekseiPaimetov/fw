class SetRefreshBgImage {
    constructor(imageService) {
        refreshBg.addEventListener('click', (event) => {
            imageService.setBgImage();
        });
    }
}