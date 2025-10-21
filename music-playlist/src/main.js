import './style.css'
import { songsArr } from './counter.js'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { renderSongs } from './counter.js'

renderSongs(songsArr, document.querySelector('.initialSongsContainer'))