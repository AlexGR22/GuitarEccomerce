import { Link } from '@remix-run/react'
import { formatearFecha } from '~/utils/helpers'

function Post({blog}) {
  const {titulo, publishedAt, contenido, url} = blog.attributes
  const imagen = blog.attributes.imagen.data.attributes.formats.medium.url
  const publishedAtFormated = formatearFecha(publishedAt)

  return (
    <article className='post'>
      <img src={imagen} alt={`imagen blog ${titulo}`} />
      <div className='contenido'>
        <h3>{titulo}</h3>
        <p className='resumen'>{contenido}</p>
        <p className='fecha'>{publishedAtFormated}</p>
        <Link to={`/blog/${url}`} className='enlace'>Leer entrada</Link>
      </div>
    </article>
  )
}

export default Post