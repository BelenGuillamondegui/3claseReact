import React from 'react'
import Card from "./Card"
import NavBar from "./Navbar"
import "../styles/Card.css"
import "../styles/Home.css"

const Home = () => {

    let productos = [
        { id: 1, nombre: 'Pelota de fútbol', descripcion: " Producto fabricado en cuero sintético.", cantidad: 5, precio: '$1200', SKU:"20", img: 'https://http2.mlstatic.com/D_NQ_NP_830335-MLU71431404246_092023-O.webp' },
        { id: 2, nombre: 'Pelota de voley', descripcion:" Cuero sintetico, cosido a máquina.",cantidad: 15,precio: '$1250',  SKU:"10", img: 'https://http2.mlstatic.com/D_NQ_NP_974483-MLU72566281662_112023-O.webp' },
        { id: 3, nombre: 'Pelota de básket', descripcion:" Material de la pelota: caucho.",cantidad: 30,precio: '$1350', SKU:"15", img: 'https://http2.mlstatic.com/D_NQ_NP_856325-MLU69881726271_062023-O.webp' },
        { id: 4, nombre: 'Pelota de rugby', descripcion:" Fabricada con poliéster de alta calidad.",cantidad: 4, precio: '$1500', SKU:"30", img: 'https://http2.mlstatic.com/D_NQ_NP_663774-MLA51665514735_092022-O.webp' },
        { id: 5, nombre: 'Pelota de Handball', descripcion:" Con textura grip de cuero sintético ", cantidad: 8, precio: '$1400',  SKU:"22",img: 'https://http2.mlstatic.com/D_NQ_NP_733830-MLA70266866615_072023-O.webp' },
    ]

  return (
    <div>
        <NavBar/>
        <h1>Bienvenidos a Myapp</h1>
        <div className='home'>
            {productos.map((producto) => <Card producto={producto}/>)}
        </div>
    </div>
  )
}

export default Home