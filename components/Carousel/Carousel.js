class Carousel {
    constructor(carousel){
            this.carousel = carousel;
            console.log(this.carousel);
            this.images = this.carousel.querySelectorAll("img");
            console.log(this.images);
            this.leftBtn = this.carousel.querySelector(".left-button")
            console.log(this.leftBtn);
            this.rightBtn = this.carousel.querySelector(".right-button");
            console.log(this.rightBtn);
            this.currentIndex = 0;
            console.log(this.currentIndex);
            this.leftBtn.addEventListener('click', () => this.prevImg());
            this.rightBtn.addEventListener('click', () => this.nextImg());
          }

          nextImg() {
              this.images[this.currentIndex].classList.remove("active-img");
              this.currentIndex++;
              if(this.currentIndex >= this.images.length){
                  this.currentIndex = 0;
              }
              this.images[this.currentIndex].classList.add("active-img");
          }

          prevImg() {
            this.images[this.currentIndex].classList.remove("active-img");
            this.currentIndex--;
            if(this.currentIndex < 0){
                this.currentIndex = this.images.length - 1;
            }
            this.images[this.currentIndex].classList.add("active-img");
        }
}

let carousel = new Carousel(document.querySelector(".carousel"));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/