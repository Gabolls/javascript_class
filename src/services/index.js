import axios from "axios"

export const getData = async callback => {
  const response = await axios
    .get("https://leonardoapi.onrender.com/music")
    .then(res => {
      callback(res.data)
      return res.data
      
    })
  console.log('cerro el loader') 
  document.getElementById('loader').classList.add('hidden')
  return response

  
}