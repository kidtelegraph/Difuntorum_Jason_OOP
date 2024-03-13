export default class PhotoGallery {
    constructor() {
      this.photos = [];
      this.galleryElement = document.querySelector('.gallery');
    }
  
    addPhoto(src, audioSrc) {
      const photo = new Photo(src, audioSrc);
      this.photos.push(photo);
      this.galleryElement.appendChild(photo.imageElement);
    }
  }
  
  class Photo {
    constructor(src, audioSrc) {
      this.src = src;
      this.audioSrc = audioSrc;
      this.imageElement = document.createElement('div');
      this.imageElement.style.backgroundImage = `url(${this.src})`;
      this.imageElement.classList.add('photo');
      this.imageElement.addEventListener('click', this.playAudio.bind(this));
      this.audio = new Audio(this.audioSrc);
    }
  
    playAudio() {
      this.audio.play();
    }
  
    stopAudio() {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
}