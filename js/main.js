import { PhotoGallery } from './modules/photo-gallery.js';
import { MusicPlayer } from './modules/player.js';

const gallery = new PhotoGallery();

// Add photos to the gallery
gallery.addPhoto('photo1.jpg', 'audio1.mp3');
gallery.addPhoto('photo2.jpg', 'audio2.mp3');

// Instantiate the music player
const player = new MusicPlayer();

// Example usage
player.loadAudio('audio1.mp3');
player.play();