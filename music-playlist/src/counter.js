export const songsArr = [
  {name: "The 30th", 
    artist: "Billie Eilish", 
    album: "Happier Than Ever",
    length: "3:15"
  },
  {name: "Bittersuite", 
    artist: "Billie Eilish", 
    album: "Hit me Hard and Soft",
    length: "4:58"
  },
  {name: "i love you", 
    artist: "Billie Eilish", 
    album: "WHEN WE ALL FALL ASLEEP, WHERE DO WE GO",
    length: "4:51"
  },
];


export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}

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
          <img src="src/hte.png" alt="Happier Than Ever Album Cover">
      </div>
    `;
    element.innerHTML += html;
});
} 