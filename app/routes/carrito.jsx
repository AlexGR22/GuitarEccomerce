import { useState, useEffect } from 'react'
import { useOutletContext } from '@remix-run/react'
import { ClientOnly } from 'remix-utils/client-only'
import styles from '../styles/carrito.css'

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

export function meta() {
    return [
        { title: 'GuitarLA - Carrito' },
        { name: 'description', content: 'GuitarLA - Carrito, venta de guitarras, tienda,blog' }
    ]
}

function Carrito() {
    const [total, setTotal] = useState(0)
    const { carrito, actualizarCarrito, borrarProducto } = useOutletContext()

    useEffect(() => {
        const totalCarrito = carrito.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0)

        setTotal(totalCarrito)
    }, [carrito])

    console.log(carrito);
    return (
        <ClientOnly fallback={<p>Cargando...</p>}>
            {() => (
            <main className="contenedorr">
                <h1 className="heading">Carrito</h1>
                <div className="contenido">
                    <div className='carrito'>
                        <h2>Articulos</h2>
                        {carrito?.length === 0 ? 'Carrito vacio' : (
                            carrito?.map(producto => (
                                <div key={producto.id} className="producto">
                                    <div>
                                        <img src={producto.imagen} alt={`imagen del producto ${producto.nombre}`} />
                                    </div>
                                    <div>
                                        <p className='nombre'><span>{producto.nombre}</span></p>
                                        <p className='cantidad'>Cantidad:</p>
                                        <select
                                            value={producto.cantidad}
                                            className='select'
                                            onChange={e => actualizarCarrito({ id: producto.id, cantidad: +e.target.value })}
                                        >
                                            <option value="">-- Cantidad --</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                        <p className='precio'>Precio: $ <span>{producto.precio}</span></p>
                                        <p className='subtotal'>Subtotal: $ <span>{producto.precio * producto.cantidad}</span></p>
                                    </div>
                                    <button
                                        type='button'
                                        className='btn_eliminar'
                                        onClick={() => borrarProducto({ id: producto.id })}
                                    >X</button>
                                </div>
                            )))}
                    </div>
                    <aside className="resumen">
                        <h1>Resumen del pedido</h1>
                        <p>total : ${total}</p>

                    </aside>
                </div>
            </main>
            )}
        </ClientOnly>
    )
}

export default Carrito