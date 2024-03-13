export default class MusicPlayer {
    constructor() {
      this.audio = new Audio();
    }
  
    loadAudio(audioSrc) {
      this.audio.src = audioSrc;
    }
  
    play() {
      this.audio.play();
    }
  
    pause() {
      this.audio.pause();
    }
  
    stop() {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
}