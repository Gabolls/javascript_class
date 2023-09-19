export const CardSong = ({ data, eventLike, eventPlay }) => {
  const song = document.createElement("div")
  song.classList.add(
    
    "py-5",
    "w-64",
    "px-6",
    
    "relative",
    "bg-darkBlue",
    "rounded-lg",
    "cancion" 

  )
  song.innerHTML = `
  <div class="bg-blue  justify-center items-center rounded-full w-14 h-14 absolute mt-40 ml-40 " id="play">
  <img class=" w-full h-full" src="/play.svg" alt="">
</div>
  <div class="h-52 w-full song_image ">
  
    <img class=" w-full h-full rounded-lg" src="${data.path.front}" alt="">
    
  </div>
  
  <div>
    <h4 class="font-semibold py-2">${data.title}</h4>
    <div class="flex justify-between opacity-60 text-sm whitespace-nowrap overflow-clip">
      <p>${data.author}</p>
      <p class="album">${data.album}</p>
    </div>
  </div>
  `
  song.addEventListener("click", eventPlay)

  
  


  return song
}

