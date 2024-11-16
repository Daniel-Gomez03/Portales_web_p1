class SliderController {
    slider;
    framestrack;
    slides = [];
    timeInterval = 4000;
    timeIntervalId;
    currentSlideIndex = -1;
    slideDirection = 1; // -1 1

    constructor() {
        this.slider = document.querySelector('.slider');
        this.framestrack = document.querySelector('.framestrack');
        this.slides = [...document.querySelectorAll('.slide')];
        console.log("Slide Status:", {
            "slides": this.slides,
            "framestrack": this.framestrack,
        });
        this.moveSlideTo(0);
    }

    moveSlideTo(slideIndex) {
        if (this.timeIntervalId) {
            clearTimeout(this.timeIntervalId);
        }
        this.currentSlideIndex = slideIndex;
        this.framestrack.style.left = `-${this.currentSlideIndex * 100}vw`;
        this.tick();
    }
    tick() {
        this.timeIntervalId = setTimeout(
            () => {
                console.log("Interval: entered");
                if (this.currentSlideIndex + this.slideDirection >= this.slides.length ||
                    this.currentSlideIndex + this.slideDirection < 0) {
                    this.slideDirection *= -1;
                }
                this.moveSlideTo(this.currentSlideIndex + this.slideDirection);
            }, this.timeInterval
        );
    }
}