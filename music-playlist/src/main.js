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

document.addEventListener('click', e => {
  if(e.target.classList.contains('playPauseBtn')){
    showPlayingBar(e);
  }
});
//pet.js
document.querySelectorAll('.petImg').forEach(pet => 
    pet.addEventListener('click', (e) => {
        selectPet(e)
}));

const textElems = [];
const backgroundElems = [];
const borderElems = [];
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
const songCards = document.querySelectorAll('.songCard');
const slider = document.querySelector('.switchCheckbox');
const playPauseBtns = document.querySelectorAll('.playPauseBtn');


slider.addEventListener('change', () => {
  const petDialogues = document.querySelectorAll('.petDialogue');
  const petProgressBars = document.querySelectorAll('.petProgressBars');
  const progressBarLabels = document.querySelectorAll('.progressBarLabel');

  textElems.length = 0;
  backgroundElems.length = 0;
  borderElems.length = 0;

  textElems.push(mainHeader, petHeader, secondHeader, ...playlistBtns, ...songCardTexts,
    ...playPauseBtns, ...forms, ...formHeaders, ...submitFormBtns, ...playlistHeaders,
    ...playlistHeaderTexts, ...petDialogues, ...progressBarLabels);

  backgroundElems.push(...playlistBtns, ...songCards, ...playPauseBtns) 

  borderElems.push(...petProgressBars)

  if(slider.checked === true){
    //light mode
    document.body.style.backgroundColor = 'white'
    textElems.forEach(elem => elem.classList.add('lightModeText'))
    backgroundElems.forEach(elem => elem.classList.add('lightModePrimary'));
    textElems.forEach(elem => elem.classList.remove('darkModeText'))
    backgroundElems.forEach(elem => elem.classList.remove('darkModePrimary'));
  } else {
    //dark mode
    document.body.style.backgroundColor = '#051c49'
    textElems.forEach(elem => elem.classList.add('darkModeText'))
    backgroundElems.forEach(elem => elem.classList.add('darkModePrimary'));
    textElems.forEach(elem => elem.classList.remove('lightModeText'))
    backgroundElems.forEach(elem => elem.classList.remove('lightModePrimary'));
  }
});