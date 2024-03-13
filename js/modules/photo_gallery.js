export class Gallery {
    constructor() {
        this.currentImageIndex = 0;
        this.images = document.querySelectorAll('.image-container img');
    }
  
    showImage(index) {
        this.images.forEach((img, i) => {
            if (i === index) {
                img.style.display = 'block';
            } else {
                img.style.display = 'none';
            }
        });
    }
  
    nextImage() {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
        this.showImage(this.currentImageIndex);
    }
  
    prevImage() {
        this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
        this.showImage(this.currentImageIndex);
    }
}  