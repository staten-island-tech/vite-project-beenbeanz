import { increaseHunger } from './pet.js'
import { increaseLvl } from './pet.js';
import { increaseHappiness } from './pet.js';
import { playGif } from './pet.js';
import { stopGif } from './pet.js'

//RETRIEVE PREVIOUS SAVED PLAYLISTS
export const allPlaylists = [];
const savedLocalStorage = JSON.parse(localStorage.getItem("playlists"));
if (savedLocalStorage) {
  savedLocalStorage.forEach(playlist => allPlaylists.push(playlist));
}
export const songsArr = [
  { name: "The 30th", artist: "Billie Eilish", album: "Guitar Songs", length: "4:41", image: "src/guitar_songs.png" },
  { name: "Bittersuite", artist: "Billie Eilish", album: "Hit me Hard and Soft", length: "4:58", image: "src/hmhas.png" },
  { name: "i love you", artist: "Billie Eilish", album: "WHEN WE ALL FALL ASLEEP, WHERE DO WE GO", length: "4:51", image: "src/wwafawdwg.png" },
  { name: "Bad Guy", artist: "Billie Eilish", album: "WHEN WE ALL FALL ASLEEP, WHERE DO WE GO", length: "3:14", image: "src/wwafawdwg.png" },
  { name: "Skinny", artist: "Billie Eilish", album: "Hit me Hard and Soft", length: "4:05", image: "src/hmhas.png" },
  { name: "When the Party's Over", artist: "Billie Eilish", album: "WHEN WE ALL FALL ASLEEP, WHERE DO WE GO", length: "3:17", image: "src/wwafawdwg.png" },
  { name: "Bury a Friend", artist: "Billie Eilish", album: "WHEN WE ALL FALL ASLEEP, WHERE DO WE GO", length: "3:13", image: "src/wwafawdwg.png" },
  { name: "All the Good Girls Go to Hell", artist: "Billie Eilish", album: "WHEN WE ALL FALL ASLEEP, WHERE DO WE GO", length: "2:48", image: "src/wwafawdwg.png" },
  { name: "Therefore I Am", artist: "Billie Eilish", album: "Happier Than Ever", length: "2:54", image: "src/hte.png" },
  { name: "No Time to Die", artist: "Billie Eilish", album: "No Time to Die (Single)", length: "4:02", image: "src/notimetodie.png" },
  { name: "Your Power", artist: "Billie Eilish", album: "Happier Than Ever", length: "4:05", image: "src/hte.png" },
  { name: "NDA", artist: "Billie Eilish", album: "Happier Than Ever", length: "3:06", image: "src/hte.png" },
  { name: "Lost Cause", artist: "Billie Eilish", album: "Happier Than Ever", length: "3:28", image: "src/hte.png" },
  { name: "Happier Than Ever", artist: "Billie Eilish", album: "Happier Than Ever", length: "4:57", image: "src/hte.png" },
  { name: "My Future", artist: "Billie Eilish", album: "My Future (Single)", length: "3:28", image: "src/hte.png" },
  { name: "Oxytocin", artist: "Billie Eilish", album: "Happier Than Ever", length: "3:28", image: "src/hte.png" },
  { name: "Getting Older", artist: "Billie Eilish", album: "Happier Than Ever", length: "3:39", image: "src/hte.png" },
  { name: "Male Fantasy", artist: "Billie Eilish", album: "Happier Than Ever", length: "4:49", image: "src/hte.png" },
  { name: "I Didn't Change My Number", artist: "Billie Eilish", album: "Happier Than Ever", length: "3:16", image: "src/hte.png" },
  { name: "Overheated", artist: "Billie Eilish", album: "Happier Than Ever", length: "3:23", image: "src/hte.png" },
];

const selectDropdown = document.querySelector('#selectDropdown');
const playlistTabs = document.querySelector(".playlistTabs");
const initialSongsContainer = document.querySelector('.initialSongsContainer');
const playlistForm = document.querySelector(".addPlaylistForm");
const addSongsForm = document.querySelector('.addSongsForm');

if(allPlaylists.length != 0){
  allPlaylists.forEach((playlist, index) => {
    playlistTabs.insertAdjacentHTML('beforeend',
      `<button class='playlistBtn playlist' data-index='${index}'>${playlist.playlistName}</button>`
    )
    selectDropdown.insertAdjacentHTML('beforeend',
      `<option value="${playlist.playlistName}">${playlist.playlistName}</option>`
    );
  })
}

export function attachPlayListeners() {
  const playPauseBtns = document.querySelectorAll('.playPauseBtn');
  playPauseBtns.forEach(btn => btn.style.pointerEvents = 'all')

  playPauseBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      showPlayingBar(e);
    });
  });
}

export function renderSongs(arr, element){
  playlistForm.style.display = 'none';
  addSongsForm.style.display = 'none';
  element.innerHTML = '';
  arr.forEach(song => {
    const html = `
      <div class="songCard">
          <button class="playPauseBtn">▶</button>
          <div class="songTexts">
            <p class="songTitle">${song.name}</p>
            <p class="songArtist">${song.artist}</p>
            <p class="songAlbum">${song.album}</p>
            <p class="songDuration">${song.length}</p>
          </div>
          <div class="songImgDiv">
            <img class="songImage" src="${song.image}" alt="Album Cover">
          </div>
      </div>
    `;
    element.innerHTML += html;  
  });  

  attachPlayListeners();
}

export function addPlaylistForm(){
  initialSongsContainer.innerHTML = '';
  playlistForm.style.display = 'block';
  addSongsForm.style.display = 'none';
}

export function submitPlaylistForm(){
  const obj = {};
  for (let i = 0; i < playlistForm.elements.length; i++) {
    const element = playlistForm[i];
      if (element.name && element.value) { 
        obj[element.name] = element.value;
      }
  }
  obj.songs = [];
  allPlaylists.push(obj);
  console.log(allPlaylists)
 
  const latestPlaylist = allPlaylists[allPlaylists.length - 1];
  playlistTabs.insertAdjacentHTML('beforeend', `
    <button class="playlist" data-index="${allPlaylists.length - 1}">${latestPlaylist.playlistName}</button>
  `);

  selectDropdown.insertAdjacentHTML('beforeend', `
    <option value="${latestPlaylist.playlistName}">${latestPlaylist.playlistName}</option>
  `)

  playlistForm.reset();
  playlistForm.style.display = 'none';

  displayPlaylist(allPlaylists[allPlaylists.length - 1]);

  //LOCAL STORAGE
  localStorage.setItem("playlists", JSON.stringify(allPlaylists));
}


//DISPLAY NEW PLAYLIST
export function displayPlaylist(playlist){
  initialSongsContainer.innerHTML = '';
  playlistForm.style.display = 'none';
  addSongsForm.style.display = 'none';

  initialSongsContainer.insertAdjacentHTML('beforeend', `
     <div class="playlistHeader">
        <div class="playlistHeaderTexts">
          <p class="playlistName">${playlist.playlistName}</p>
          <p class="playlistDesc">${playlist.playlistDesc}</p>
          <p class="playlistDate">${playlist.dateCreated}</p>
        </div>
      </div>  
  `)

  playlist.songs.forEach(song => renderSongAdded(song))
}

playlistTabs.addEventListener('click', (e) => {
  if(e.target.classList.contains('playlist')) {
    const index = e.target.dataset.index;
    displayPlaylist(allPlaylists[index]);
  }
});

export function showSongForm(){
  initialSongsContainer.innerHTML = '';
  addSongsForm.style.display = 'block';
  playlistForm.style.display = 'none';
}

//ADDING SONGS
export function submitSongForm(){
  initialSongsContainer.innerHTML = ''
  const obj = {};
  for (let i = 0; i < addSongsForm.elements.length; i++) {
    const element = addSongsForm[i];
      if (element.name && element.value) { 
        obj[element.name] = element.value;
      }
  }
  
  const playlistName = obj.playlistForSong;
  const playlist = allPlaylists.find(playlist => playlist.playlistName === playlistName)
  playlist.songs.push(obj);
  localStorage.setItem("playlists", JSON.stringify(allPlaylists));

  //add song to playlist
  addSongsForm.style.display = 'none';
  renderSongs(songsArr, initialSongsContainer)
  console.log('hjif')
  attachPlayListeners();
  increaseHunger();
}

function renderSongAdded(song){
  initialSongsContainer.insertAdjacentHTML('beforeend', `
    <div class="songCard">
        <button class="playPauseBtn">▶</button>
        <div class="songTexts">
          <p class="songTitle">${song.songName}</p>
          <p class="songArtist">${song.songArtist}</p>
          <p class="songAlbum">${song.songAlbum}</p>
          <p class="songDuration">${song.songLength}</p>
        </div>
    </div>
  `);
}

let timerInterval;
let seconds = 0;
const twinkleSong = new Audio('./src/twinkle.mp3');
twinkleSong.volume = .1;

import { happyLvl } from './pet.js';
import { decreaseHappiness } from './pet.js';
export function showPlayingBar(e){
  const songCard = e.target.closest('.songCard');
  const cardImg = e.target.parentElement.querySelector('.songImgDiv')
  const songLength = songCard.querySelector('.songDuration').textContent;
  //math for interval
  const songSeconds = Number(songLength.slice(-2)) + Number(songLength.slice(2,3,4) * 60);
  const interval = Number((100/songSeconds));

  const html = `
    <div class="outsideBarDiv">
      <div class="insideBarDiv"></div>
    </div>
  `;

  if(e.target.innerHTML === '▶'){
    cardImg.insertAdjacentHTML('afterend', html);
    e.target.innerHTML = '||';
    twinkleSong.play();  
    playGif();

    const innerDiv = document.querySelector('.insideBarDiv');
    let width = 0;
    if(!timerInterval){
      timerInterval = setInterval(() => {
        seconds++;
       
        width += interval;
        innerDiv.style.width = width + `%`;

        if(seconds % 3 === 0){
          increaseLvl();
        }
        if(seconds % 4 === 0){
          increaseHappiness();
        }
      }, 1000);
    }
  } else {
    e.target.innerHTML = '▶';
    twinkleSong.pause();
    if(happyLvl === 5){
      decreaseHappiness();
    }
    stopGif();
    const outerDiv = document.querySelector('.outsideBarDiv');
    const innerDiv = document.querySelector('.insideBarDiv');
    outerDiv.remove();
    innerDiv.remove();
    clearInterval(timerInterval);
    timerInterval = null;
    seconds = 0;
  }
}