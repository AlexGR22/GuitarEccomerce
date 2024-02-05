import { useLoaderData } from '@remix-run/react'
import { getBlog } from '~/models/blog.server'
import { formatearFecha } from '~/utils/helpers'

export function meta ({ data }) { // el data es el loader que retornamos y se pasa automaticamente

  return [
    {title: `GuitarLA - ${data.titulo}`},
    { name: 'description', content: `GuitarLA, guitarra ${data.titulo}` }
  ]
}

export async function loader({ params }) {

    const {blogUrl} = params //se extrae con el mismo nombre de este archivo y tiene que estar entre llaves {} , ya que es un objeto
    const blog = await getBlog(blogUrl)
    if (blog.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Blog no encontrado',
        })
    }
    return blog?.data[0].attributes // agregar optional chaining para que no de error si no hay data, siempre recomendable
}

function Blog() {

    const blog = useLoaderData()
    const { titulo, contenido, publishedAt } = blog
    const imagen = blog?.imagen?.data?.attributes?.url// agregar optional chaining para que no de error si no hay data, siempre recomendable
    const publishedAtFormated = formatearFecha(publishedAt) 

  return (
    <article className='post mt-3'>
        <img src={imagen} alt={titulo} className='imagen' />
        <div className='contenido'>
        <h1>{titulo}</h1>
        <p className='fecha'>{publishedAtFormated}</p>
        <p className='texto'>{contenido}</p>
        </div>
    </article>
  )
}

export default Blog



//=====================
// archivo sin nested
//=====================


// import { useLoaderData } from '@remix-run/react'
// import { getBlog } from '~/models/blog.server'
// import { formatearFecha } from '~/utils/helpers'
// import styles from '~/styles/blog.css'

// export function links() {
//     return [
//         {
//             rel: 'stylesheet',
//             href: styles
//         }
//     ]
// }

// export async function loader({ request, params }) {

//     const {blogUrl} = params //se extrae con el mismo nombre de este archivo y tiene que estar entre llaves {} , ya que es un objeto
//     const blog = await getBlog(blogUrl)
//     if (blog.data.length === 0) {
//         throw new Response('', {
//             status: 404,
//             statusText: 'Blog no encontrado',
//         })
//     }
//     return blog?.data[0].attributes // agregar optional chaining para que no de error si no hay data, siempre recomendable
// }

// export function meta ({ data }) { // el data es el loader que retornamos y se pasa automaticamente

//     console.log('desde meta', data);
//     return [
//       {title: `GuitarLA - ${data.titulo}`},
//       { name: 'description', content: `GuitarLA, guitarra ${data.titulo}` }
      
//     ]
//   }

// function Blog() {
//     const blog = useLoaderData()
//     const { titulo, contenido, publishedAt } = blog
//     const imagen = blog?.imagen?.data?.attributes?.url// agregar optional chaining para que no de error si no hay data, siempre recomendable
//     const publishedAtFormated = formatearFecha(publishedAt) 

//   return (
//     <article className='contenedor post mt-3'>
//         <img src={imagen} alt={titulo} className='imagen' />
//         <div className='contenido'>
//         <h1>{titulo}</h1>
//         <p className='fecha'>{publishedAtFormated}</p>
//         <p className='texto'>{contenido}</p>
//         </div>
//     </article>
//   )
// }

// export default Blog