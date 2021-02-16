"use strict"

class Slider {
    constructor(block, slides){
        this.block = block;
        this.slides = slides;
        this.createSlider();
    }
    currentIndex = 0;
    sliderContainer = document.createElement("div");
    leftArrow = document.createElement("i");
    rightArrow = document.createElement("i");
    imgContainer = document.createElement("div");
    blockArray = [];
    
    createSlider(){

        this.sliderContainer.classList.add("sliderContainer");
        this.leftArrow.classList.add('fas', 'fa-chevron-circle-left', 'fa-2x','leftArrow');
        this.leftArrow.addEventListener("click", () => {this.setNextLeftImage()});
        this.rightArrow.classList.add('fas', 'fa-chevron-circle-right','fa-2x','rightArrow');
        this.rightArrow.addEventListener("click", () => {this.setNextRightImage()});
       
        this.imgContainer.classList.add("imgContainer");
        this.createImageBlocks();
        this.sliderContainer.append(this.leftArrow,this.imgContainer,this.rightArrow);
        this.renderSlider();
        
    }
    createImageBlocks(){
        this.createImageBlocksArray();
        this.blockArray.forEach(element => {
            this.imgContainer.appendChild(element)
        })
    }


    createImageBlocksArray(){
        for (let i = 0; i < this.slides.length; i++) {
            const imgBlock = document.createElement("div");
            imgBlock.classList.add("imgBlock");
            const img = document.createElement("img");
            img.src = this.slides[i];
            img.alt = "img";
            imgBlock.classList.add("img-hidden");
            imgBlock.appendChild(img);
            this.blockArray.push(imgBlock);
            console.log(i);
        };
    }
    renderSlider(){
        this.block.appendChild(this.sliderContainer);
        this.showImage();
    }

    showImage(){
        this.blockArray[this.currentIndex].classList.remove("img-hidden");
    }
    hideVisibleImage(){
        this.blockArray[this.currentIndex].classList.add("img-hidden");
    }

    setNextLeftImage() {
        this.hideVisibleImage();
        if (this.currentIndex === 0) {
            this.currentIndex = this.slides.length - 1;
        } else {
            this.currentIndex--;
        }
        this.showImage();
    }
    setNextRightImage() {
        this.hideVisibleImage();
        if (this.currentIndex === this.slides.length - 1) {
            this.currentIndex = 0;
        } else {
            this.currentIndex++;
        }
        this.showImage();
    }
}


