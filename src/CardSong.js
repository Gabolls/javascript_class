export const CardSong = (song) => {
    const container = document.createElement('div')
    container.classList.add('shadow-l','shadow-[#f7258450]','py-3','w-64','px-6','ring-custom','relative')
    container.innerHTML = `<div class="h-52 w-full"></div>
    <div class="h-52 w-60 -top-3 -right-3 absolute">
      
    </div>
    <div>
    <img class="object-cover w-full h-full" src="${song.path.front}" alt="">
      <h4 class="font-semibold py-2">${song.title}</h4>
      <div class="flex justify-between opacity-60 text-sm whitespace-nowrap overflow-clip">
        <p>${song.author}</p>
      </div>
    </div>`
    container.addEventListener('click', () => {
      console.log('loca')
    })
    
    

    return container
}