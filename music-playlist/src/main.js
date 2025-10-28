import './style.css'
import { songsArr } from './counter.js'
import { addPlaylistForm } from './counter.js'
import { submitPlaylistForm } from './counter.js'
import { submitSongForm } from './counter.js'
import { showSongForm } from './counter.js'
import viteLogo from '/vite.svg'
import { renderSongs } from './counter.js'

renderSongs(songsArr, document.querySelector('.initialSongsContainer'));

const allSongsBtn = document.querySelector('.allSongs');
allSongsBtn.addEventListener('click', () => {renderSongs(songsArr, document.querySelector('.initialSongsContainer'))})

const addPlaylistBtn = document.querySelector('.addPlaylistBtn');
addPlaylistBtn.addEventListener('click', addPlaylistForm);


//const playlistForm = document.querySelector(".addPlaylistForm");
const PlaylistSubmitBtn = document.querySelector("#PlaylistSubmitBtn");
PlaylistSubmitBtn.addEventListener('click', submitPlaylistForm);

const addSongBtn = document.querySelector('.addSongBtn');
addSongBtn.addEventListener('click', showSongForm);

const songSubmitBtn = document.querySelector("#songSubmitBtn");
songSubmitBtn.addEventListener('click', submitSongForm);

