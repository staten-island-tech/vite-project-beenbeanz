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
export function addPlaylistForm(){
  initialSongsContainer.innerHTML = '';
}





/*export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}*/