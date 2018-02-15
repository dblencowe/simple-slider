class Slider {

    constructor(sliderId) {
        this.slider = document.getElementById(sliderId);
        this.slides = this.slider.querySelectorAll('.slide');
        this.setSliderTimeout();
        // Setup events
        this.slider.querySelectorAll('.next').forEach(button => {
            button.addEventListener('click', this.nextSlide.bind(this));
        });

        this.slider.querySelectorAll('.prev').forEach(button => {
            button.addEventListener('click', this.prevSlide.bind(this));
        });
    }

    setSliderTimeout() {
        clearInterval(this.slideInterval);
        this.slideInterval = setInterval(this.nextSlide, 5000);
    }

    nextSlide() {
        this.setSliderTimeout();
        let currentSlide = this.getCurrentSlide();
        if (currentSlide < (this.slides.length - 1)) {
            this.slides[currentSlide].classList.remove('show');
            this.slides[++currentSlide].classList.add('show');
        } else {
            this.slides[currentSlide].classList.remove('show');
            this.slides[0].classList.add('show');
        }
    }

    prevSlide() {
        this.setSliderTimeout();
        let currentSlide = this.getCurrentSlide;
        if (currentSlide > 0) {
            this.slides[currentSlide].classList.remove('show');
            this.slides[--currentSlide].classList.add('show');
        } else {
            this.slides[currentSlide].classList.remove('show');
            this.slides[this.slides.length - 1].classList.add('show');
        }
    }

    getCurrentSlide() {
        for (let index = 0; index < this.slides.length; index ++) {
            if (this.isVisible(this.slides[index]) === true) {
                return index;
            }
        }
    }

    isVisible(el) {
        return el.className && new RegExp("(\\s|^)show(\\s|$)").test(el.className);
    }
}

let slider = new Slider('slider');
