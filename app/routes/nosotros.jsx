import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta() {
  return (
    [
      { title: 'GuitarLA - Nosotros' },
      { name: 'description', content: 'Venta de guitarras' }
    ]
  )
}

export function links() { // para agregar el css o imagenes
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

function Nosotros() {
  return (
    <main className="contenedor">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="imagen nosotros" />
        <div>
          {/* <p>
          En nuestra tienda de guitarras, ofrecemos una amplia selección de guitarras de alta calidad para todos los niveles, desde principiantes hasta profesionales. Además, contamos con un blog lleno de consejos y tutoriales, así como cursos en línea diseñados para ayudarte a mejorar tus habilidades de guitarra.<br/>
          Únete a nuestra comunidad de amantes de la música y descubre todo lo que la guitarra tiene para ofrecer.
          </p> */}
          <p>
            En nuestra tienda de guitarras, nos apasiona la música y nos encanta compartir esa pasión contigo. Ofrecemos una amplia selección de guitarras de alta calidad para todos los niveles, desde principiantes hasta profesionales. Nuestro equipo de expertos en música está aquí para ayudarte a encontrar la guitarra perfecta que se adapte a tus necesidades y estilo de tocar.<br />
          </p>
          <p>
            Además de nuestra tienda, también contamos con un blog lleno de consejos, tutoriales y entrevistas con músicos reconocidos. Queremos ser tu recurso confiable para aprender y mejorar tus habilidades de guitarra. Nuestros cursos de guitarra en línea están diseñados para ayudarte a avanzar en tu camino musical, sin importar tu nivel de experiencia.
            <br />
          </p>
          <p>
            Ya sea que estés buscando tu primera guitarra o quieras llevar tus habilidades al siguiente nivel, estamos aquí para ayudarte. Únete a nuestra comunidad de amantes de la música y descubre todo lo que la guitarra tiene para ofrecer.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros