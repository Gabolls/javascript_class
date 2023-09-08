import './style.scss'
fetch('https://leonardoapi.onrender.com/music').then(res => res.json())
.then(arreglo => {

    // Trabajaremos aquí





    const resultado = arreglo.map(
        (res) => {
        
            return res.path.front
            


        }
    )

    console.log(resultado)













})
