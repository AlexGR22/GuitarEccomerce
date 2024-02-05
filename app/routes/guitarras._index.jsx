import { useLoaderData} from '@remix-run/react'
import { getGuitarras } from '~/models/guitarras.server'
import ListadoGuitarras from '~/components/listadoGuitarras'

export function meta(  ) {
  return [
    {title: 'GuitarLA - Tienda'},
    { name: 'description', content:'GuitarLA - Nuestra colección de guitarras' }
]}

export async function loader() {
  const guitarras = await getGuitarras()
  return guitarras.data
}

function Guitarras() {

 

  const  guitarras  = useLoaderData()

  return (

      <ListadoGuitarras
        guitarras={guitarras}
      />

  )
}

export default Guitarras



//=====================
// archivo sin nested
//=====================

// import { useLoaderData, Outlet } from '@remix-run/react'
// import { getGuitarras } from '~/models/guitarras.server'
// import ListadoGuitarras from '~/components/listadoGuitarras'
// import styles from '~/styles/guitarras.css'

// export function meta(  ) {
//   return [
//     {title: 'GuitarLA - Tienda'},
//     { name: 'description', content:'GuitarLA - Nuestra colección de guitarras' }
    
  
// ]}
// export function links() {
//   return [
//     {
//       rel: 'stylesheet',
//       href: styles
//     }
//   ]
// }

// export async function loader() {
//   const guitarras = await getGuitarras()
//   // console.log(guitarras);
//   return guitarras.data
// }

// // Otra opcion
// // export async function loader() {
// //     const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
// //     const resultado = await respuesta.json()
// //     console.log(resultado);
// //     console.log(process.env.API_URL);
// //     return {}
// // }

// function Guitarras() {

//   const  guitarras  = useLoaderData()
//   console.log('desde guitarras');

//   return (
//     <main className="contenedor">
//       <ListadoGuitarras
//         guitarras={guitarras}
//       />

//       <Outlet />
//     </main>

//   )
// }

// export default Guitarras