export const songsArr = [
  { name: "The 30th", artist: "Billie Eilish", album: "Guitar Songs", length: "4:41", image: "src/hte.png" },
  { name: "Bittersuite", artist: "Billie Eilish", album: "Hit me Hard and Soft", length: "4:58", image: "src/hmhas.png" },
  { name: "i love you", artist: "Billie Eilish", album: "WHEN WE ALL FALL ASLEEP, WHERE DO WE GO", length: "4:51", image: "src/wwafawdwg.png" },
  { name: "Bad Guy", artist: "Billie Eilish", album: "WHEN WE ALL FALL ASLEEP, WHERE DO WE GO", length: "3:14", image: "src/wwafawdwg.png" },
  { name: "Everything I Wanted", artist: "Billie Eilish", album: "Everything I wanted", length: "4:05", image: "src/everythingiwanted.png" },
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

export function renderSongs(arr, element){
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
}

const initialSongsContainer = document.querySelector('.initialSongsContainer');
const playlistForm = document.querySelector(".addPlaylistForm");

export function addPlaylistForm(){
  initialSongsContainer.innerHTML = '';
  playlistForm.style.display = 'block';
  addSongsForm.style.display = 'none';
}

const selectDropdown = document.querySelector('#selectDropdown');
const playlistTabs = document.querySelector(".playlistTabs");
export const allPlaylists = [];
const songs = [];
export function submitPlaylistForm(){
  const obj = {};
  for (let i = 0; i < playlistForm.elements.length; i++) {
    const element = playlistForm[i];
      if (element.name && element.value) { 
        obj[element.name] = element.value;
      }
  }
  allPlaylists.push(obj);

  const latestPlaylist = allPlaylists[allPlaylists.length - 1];
  playlistTabs.insertAdjacentHTML('beforeend', `
    <button class="playlist" data-index="${allPlaylists.length - 1}">${latestPlaylist.playlistName}</button>
  `);

  selectDropdown.insertAdjacentHTML('beforeend', `
    <option value="${latestPlaylist.playlistName}">${latestPlaylist.playlistName}</option>
  `)

  playlistForm.reset();
  playlistForm.style.display = 'none';
  //console.log(allPlaylists[allPlaylists.length - 1])

  displayPlaylist(allPlaylists[allPlaylists.length - 1]);
}
const addSongsForm = document.querySelector('.addSongsForm');
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
        <img class="songImage" src="${playlist.playlistImage}" alt="Playlist Cover">
      </div>  
  `)

  songs.forEach(song => {
    if(song.playlistForSong === playlist.playlistName){
      renderSongAdded(song)
    }
  })
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
  songs.push(obj);

  //add song to playlist

  addSongsForm.style.display = 'none';
  console.log(obj.playlistForSong);
  displayPlaylist(obj.playlistForSong);
  //renderSongAdded(obj);
}

function renderSongAdded(song){
  console.log(song)
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