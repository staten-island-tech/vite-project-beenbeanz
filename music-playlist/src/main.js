import './style.css'
import { songsArr } from './counter.js'
import { addPlaylistForm } from './counter.js'
import { submitPlaylistForm } from './counter.js'
import { submitSongForm } from './counter.js'
import { showSongForm } from './counter.js'
import { renderSongs } from './counter.js'
import { selectPet } from './pet.js'
import { showPlayingBar } from './counter.js'

//counter.js
renderSongs(songsArr, document.querySelector('.initialSongsContainer'));

const allSongsBtn = document.querySelector('.allSongs');
allSongsBtn.addEventListener('click', () => {renderSongs(songsArr, document.querySelector('.initialSongsContainer'))})

const addPlaylistBtn = document.querySelector('.addPlaylistBtn');
addPlaylistBtn.addEventListener('click', addPlaylistForm);

const PlaylistSubmitBtn = document.querySelector("#PlaylistSubmitBtn");
PlaylistSubmitBtn.addEventListener('click', submitPlaylistForm);

const addSongBtn = document.querySelector('.addSongBtn');
addSongBtn.addEventListener('click', showSongForm);

const songSubmitBtn = document.querySelector("#songSubmitBtn");
songSubmitBtn.addEventListener('click', submitSongForm);

//pet.js
document.querySelectorAll('.petImg').forEach(pet => 
    pet.addEventListener('click', (e) => {
        selectPet(e)
}));

const playPauseBtns = document.querySelectorAll('.playPauseBtn');
playPauseBtns.forEach(btn => btn.addEventListener('click', (e) => {
    showPlayingBar(e);
}))

const textElems = [];
const backgroundElems = [];
const mainHeader = document.querySelector('.h1Header')
const petHeader = document.querySelector('.h4Header')
const secondHeader = document.querySelector('.h2Header')
const playlistBtns = document.querySelectorAll('.playlistBtn')
const songCardTexts = document.querySelectorAll('.songTexts')
const formHeaders = document.querySelectorAll('.formHeader')
const forms = document.querySelectorAll('.form')
const submitFormBtns = document.querySelectorAll('.submitFormBtn')
const playlistHeaders = document.querySelectorAll('.playlistHeader')
const playlistHeaderTexts = document.querySelectorAll('.playlistHeaderTexts')
const slider = document.querySelector('.switchCheckbox');

slider.addEventListener('change', () => {
  textElems.push(mainHeader, petHeader, secondHeader, ...playlistBtns, ...songCardTexts,
    ...playPauseBtns, ...forms, ...formHeaders, ...submitFormBtns, ...playlistHeaders,
    ...playlistHeaderTexts);
  console.log(textElems)

  if(slider.checked === true){
    //light mode
    document.body.style.backgroundColor = 'white'
    textElems.forEach(elem => elem.classList.add('lightModeText'))
  } else {
    //dark mode
    document.body.style.backgroundColor = '#051c49'
  }
  console.log('CHECKED?', slider.checked);
});