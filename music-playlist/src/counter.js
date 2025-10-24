export const songsArr = [
  {name: "The 30th", 
    artist: "Billie Eilish", 
    album: "Happier Than Ever",
    length: "3:15",
    image: "src/hte.png"
  },
  {name: "Bittersuite", 
    artist: "Billie Eilish", 
    album: "Hit me Hard and Soft",
    length: "4:58",
    image: "src/hmhas.png"
  },
  {name: "i love you", 
    artist: "Billie Eilish", 
    album: "WHEN WE ALL FALL ASLEEP, WHERE DO WE GO",
    length: "4:51",
    image: "src/wwafawdwg.png"
  },
];

export function renderSongs(arr, element){
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
          <img class="songImage" src="${song.image}" alt="Album Cover">
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
}

const playlistTabs = document.querySelector(".playlistTabs");
export const allPlaylists = [];
export function submitPlaylistForm(){
  const obj = {};
  let playlistName = '';
  for (let i = 0; i < playlistForm.elements.length; i++) {
    const element = playlistForm[i];
      if (element.name && element.value) { 
        obj[element.name] = element.value;
      }
  }
  allPlaylists.push(obj);

  const latestPlaylist = allPlaylists[allPlaylists.length - 1];
  playlistTabs.insertAdjacentHTML('beforeend', `
    <button class="playlist">${latestPlaylist.playlistName}</button>
  `);

  playlistForm.reset();
  playlistForm.style.display = 'none';
  console.log(allPlaylists)
}

//DISPLAY NEW PLAYLIST
export function displayPlaylist(playlist){
  initialSongsContainer.insertAdjacentElement('beforeend', `
     <div class="playlistHeader">
        <div class="playlistHeaderTexts">
          <p class="playlistName">${playlist.playlistName}</p>
          <p class="playlistDesc">${playlist.playlistDesc}</p>
          <p class="playlistDate">${playlist.playlistDate}</p>
        </div>
        <img class="songImage" src="${playlist.playlistImage}" alt="Album Cover">
      </div>  
  `)
  }
   
const playlistTabBtns = document.querySelector('.playlist');
if(allPlaylists.length > 1){
  playlistTabBtns.forEach(btn => btn.addEventListener('click', displayPlaylist(allPlaylists[1]))); 
}
