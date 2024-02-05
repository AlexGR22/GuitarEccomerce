import { useState } from 'react'  
import { useLoaderData, useOutletContext } from '@remix-run/react'
import { getGuitarra } from '~/models/guitarras.server'



export async function loader({ request, params }) {
  // console.log(`===============`)
  // console.log(params);
  // console.log(`===============`)
  // console.log(request);
  // console.log(`===============`);
  const { guitarraUrl } = params // es el nombre de este mismo archivo 
  const guitarra = await getGuitarra(guitarraUrl)
  // console.log('desde el loader',guitarra);
  if (guitarra.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Guitarra no encontrada',
    }
    )
  }
  return guitarra.data[0]
}

export function meta ({ data }) { // el data es el loader que retornamos y se pasa automaticamente

  // if (!data) {
  //   return [
  //     {title: 'GuitarLA - Guitarra no encontrada'},
  //     { name: 'description', content: 'GuitarLA, guitarra no encontrada' }
  //   ]
  // } en Remix V2 no funciona, ya que renderiza el meta del root
  return [
    {title: `GuitarLA - ${data.nombre}`},
    { name: 'description', content: `GuitarLA, guitarra ${data.nombre}` }
    
  ]
}



function Guitarra() {

  const { agregarCarrito } = useOutletContext()

  const [ cantidad, setCantidad ] = useState(0)
  const guitarra = useLoaderData()
  const { nombre, imagen, precio,descripcion } = guitarra.attributes

  const handleSubmit = e => {
    e.preventDefault()
    if ( cantidad < 1 ) {
      alert('elige una cantidad')
      return
    }
    console.log(imagen.data);
    const guitarraSeleccionada = {
      id: guitarra.id,
      imagen: imagen.data.attributes.formats.small.url,
      nombre,
      precio,
      cantidad
    }

    
    agregarCarrito(guitarraSeleccionada)

    alert(`Agregaste ${cantidad} al carrito`)
  }

  return (
    <div className='guitarra'>
      <img src={imagen.data.attributes.url} alt={`imagen guitarra ${nombre}`} className='imagen' />
      <div className='contenido'>
        <h3>{nombre}</h3>
        <p className='texto'>{descripcion}</p>
        <p className='precio'>${precio}</p>
        <form  onSubmit={handleSubmit} className='formulario'>
          <label htmlFor="cantidad">Cantidad:</label>
          <select 
              id="cantidad"
              // onChange={e => setCantidad(parseInt(e.target.value))}
              onChange={e => setCantidad(+e.target.value)}
          >
            <option value="">-- Elige --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input 
            type="submit" 
            value="Anadir al carrito" 
          />
        </form>
      </div>
    </div>
  )
}

export default Guitarra