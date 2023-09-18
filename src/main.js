import "./style.css"
import { CardSong } from "./components/CardSong"
import { reloadButtonPlay, setCurrentSong } from "./components/CurrentSong"
import { getData } from "./services"
import "./style.css"


const track_list = document.getElementById("track_list")

getData(data => {
  data.map(song => {
    track_list?.appendChild(
      CardSong({
        data: song,
        eventPlay: () => {
          setCurrentSong(song)
          reloadButtonPlay()
        },
        eventLike: () => console.log("Like")
      })
    )
  })
})

const buscar = () =>{
  const aa = documet.getElementById('main')
  const aja = documet.createElement('div')
  aja.innerHTML = `<div>hols</div>`

  aa.appendChild(aja)
}


const elementoDOM = document.getElementById('up')

const inicio = document.createElement('button')
inicio.classList.add('flex', 'justify-around', 'w-full')
inicio.innerHTML = `<img src="/assets/inicio-activo.svg" alt="">
<p>Inicio</p>`

inicio.addEventListener('click', () => {
    document.getElementById('track_list').classList.remove('hidden'),
    document.getElementById('main-song').classList.remove('hidden')
  
})


const nodoHTML = document.createElement('button')
nodoHTML.classList.add('flex', 'justify-around', 'w-full')
nodoHTML.innerHTML = `<img src="/assets/buscar (1).svg" alt="">
<p>Buscar</p>`

nodoHTML.addEventListener('click', () => {
    document.getElementById('track_list').classList.toggle('hidden'),
    document.getElementById('main-song').classList.toggle('hidden')
  
})

const search_list = document.getElementById('search_list')

getData(data => {
  data.map(song => {
    search_list?.appendChild(
      CardSong({
        data: song,
        eventPlay: () => {
          setCurrentSong(song)
          reloadButtonPlay()
        },
        eventLike: () => console.log("Like")
      })
    )
  })
})



elementoDOM.appendChild(inicio)
elementoDOM.appendChild(nodoHTML)


// elementoDOM.appendChild(nuevoElemento)



// console.log(elementoDOM)












