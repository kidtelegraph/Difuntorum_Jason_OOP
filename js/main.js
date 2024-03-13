import { Gallery } from './modules/photo_gallery.js';
import { AudioPlayer } from './modules/player.js';

// Initialize gallery
const gallery = new Gallery();

// Initialize audio player
const player = new AudioPlayer();

// Event listeners
document.querySelector('.prev-btn').addEventListener('click', () => {
    gallery.prevImage();
});

document.querySelector('.next-btn').addEventListener('click', () => {
    gallery.nextImage();
});

// Example usage of audio player controls
document.querySelector('.play-btn').addEventListener('click', () => {
    player.play();
});

document.querySelector('.pause-btn').addEventListener('click', () => {
    player.pause();
});