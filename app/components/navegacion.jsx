import { Link, useLocation } from '@remix-run/react'
import imagen from '../../public/img/carrito.png'

function Navegacion() {
// location.pathname obtiene el path actual de la url
    const { pathname } = useLocation()


  return (
    <nav className='navegacion'>
    <Link
        to='/'
        className= { pathname === '/' ? 'active' : ''}
    >Inicio</Link>
    <Link
        to='/nosotros'
        className= { pathname === '/nosotros' ? 'active' : ''}
    >Nosotros</Link>
    <Link
        to='/guitarras'
        className= { pathname === '/guitarras' ? 'active' : ''}
    >Tienda</Link>
    <Link
        to='/blog'
        className= { pathname === '/blog' ? 'active' : ''}
    >Blog</Link>
    <Link
        to='/carrito'
    ><img src={imagen} alt="Carrito" />
    </Link>
</nav>
  )
}

export default Navegacion