import './style.scss'
import { CardSong } from './src/CardSong'



const elementoDOM = document.getElementById('track-list')


fetch('https://leonardoapi.onrender.com/music')
    .then( (res) => res.json())
    .then( (data) => {


        data.map( (song) => {
           
            elementoDOM.appendChild(
                CardSong(song)
            )
            
   })

})













// elementoDOM.appendChild(nuevoElemento)



// console.log(elementoDOM)












