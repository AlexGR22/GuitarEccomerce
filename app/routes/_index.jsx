import { useLoaderData } from '@remix-run/react'
import { getGuitarras } from '~/models/guitarras.server'
import { getBlogs } from '~/models/blog.server'
import { getCurso } from '~/models/curso.server'
import ListadoGuitarras  from '~/components/listadoGuitarras'
import ListadoBlogs  from '~/components/listadoBlogs'
import Curso from '~/components/curso'
import stylesGuitarras from '~/styles/guitarras.css'
import stylesBlog from '~/styles/blog.css'
import stylesCurso from '~/styles/curso.css'
export function meta () {
  return [
      {title: `GuitarLA - Inicio`},
      { name: 'description', content: 'GuitarLA, venta de guitarras' }
    ]
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: stylesGuitarras
    },
    {
      rel: 'stylesheet',
      href: stylesBlog
    },
    {
      rel: 'stylesheet',
      href: stylesCurso
    }
  ]
}
export async function loader () {

// Hacer múltiples llamadas asíncronas y esperar a que todas se resuelvan antes de continuar,mejora performance
  const [guitarras, blogs, curso] = await Promise.all([
    getGuitarras(),
    getBlogs(),
    getCurso()
  ])

  if (guitarras && blogs) {
    // console.log(guitarras.data)
    // console.log(blogs.data)
    // console.log(curso.data)
    return {
      guitarras: guitarras.data,
      blogs: blogs.data,
      curso: curso.data
    }
  }
  return null
}

function Index () {
  const {guitarras, blogs, curso} = useLoaderData()
  return (
    <>
      <main className='contenedor'>
        <ListadoGuitarras
          guitarras={guitarras}/>
      </main>
        <Curso
          curso={curso.attributes}
        />
        <section>
        <ListadoBlogs
          blogs={blogs}/>
        </section>
     </>
  )
}

export default Index