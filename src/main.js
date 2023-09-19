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




const elementoDOM = document.getElementById('up')

const inicio = document.createElement('button')
inicio.classList.add('flex', 'gap-8','w-full', 'justify-center')
inicio.innerHTML = `<img src="/assets/inicio-activo.svg" alt="">
<p>Inicio</p>`

inicio.addEventListener('click', () => {
    document.getElementById('track_list').classList.remove('hidden'),
    document.getElementById('main-song').classList.remove('hidden')
  
})


const Search = document.createElement('button')
Search.classList.add('flex', 'justify-center', 'w-full', 'gap-8')
Search.innerHTML = `<img src="/assets/buscar (1).svg" alt="">
<p>Buscar</p>`

Search.addEventListener('click', () => {
    document.getElementById('track_list').classList.toggle('hidden'),
    document.getElementById('main-song').classList.toggle('hidden')
    // , document.getElementById('down').classList.toggle('down')
  
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

const navbar = document.getElementById('navbar')

elementoDOM.appendChild(inicio)
elementoDOM.appendChild(Search)

const nav = document.getElementById('nav')
nav.classList.add( )
const nav_menu = document.createElement('button')
nav_menu.classList.add()
nav_menu.innerHTML = `<img src="/assets/burger.svg" alt="">`
nav_menu.addEventListener('click', ()=>{

  document.getElementById('navbar').classList.toggle('open')
  document.getElementById('navbar').classList.toggle('close')
 


})

const home = document.createElement('button')
home.classList.add('flex', 'justify-around', 'w-full')
home.innerHTML = `<img src="/assets/inicio-activo.svg" alt="">
<p>Inicio</p>`

home.addEventListener('click', () => {
    document.getElementById('track_list').classList.remove('hidden'),
    document.getElementById('main-song').classList.remove('hidden')
  
})

const buscar = document.createElement('button')
buscar.classList.add('flex', 'justify-around', 'w-full')
buscar.innerHTML = `<img src="/assets/buscar (1).svg" alt="">
<p>Buscar</p>`

buscar.addEventListener('click', () => {
    document.getElementById('track_list').classList.toggle('hidden'),
    document.getElementById('main-song').classList.toggle('hidden')
  
})



 navbar.appendChild(home)
navbar.appendChild(buscar)


nav.appendChild(nav_menu)





// elementoDOM.appendChild(nuevoElemento)



// console.log(elementoDOM)












