import { useState, useEffect } from 'react'
import { 
    Meta,
    Links,
    Outlet,
    Scripts,
    LiveReload,
    useRouteError,
    isRouteErrorResponse,
    Link
} from '@remix-run/react'
import styles from '~/styles/index.css'
import Header from '~/components/header'
import Footer from '~/components/footer'


export function meta( { data } ) {
    // console.log('data root tienda',data);
    return (
        [
            { charset: 'utf-8' },
            { title: data? 'Guitar - Remix'  : 'Guitar -  Pagina no encontrada' },
            { name: 'viewport', content: 'width=device-width,initial-scale=1' }
        ]
    )
           
}

export function links() {
    return [
        
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
        {
            rel:"preconnect" ,
            href:"https://fonts.googleapis.com"
        },
        {
            rel:"preconnect",
            href:"https://fonts.gstatic.com",
            crossOrigin:"true"
        },
        {
            rel:"stylesheet",
            href:"https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap"
        },
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

export default function App () {
    const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : null
    const [carrito, setCarrito] = useState(carritoLS)
    


    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])

    const agregarCarrito = guitarra => {
        if (carrito.some(guitarraState => guitarraState.id === guitarra.id)) {
            // Iterar el arreglo y conseguir el objeto del carrito
            const carritoActualizado = carrito.map(guitarraState => {
                if (guitarraState.id === guitarra.id) {
                    // Iterar el objeto y reescribir la cantidad
                        // Si quieres sobrescribir la cantidad:
                    guitarraState.cantidad = guitarra.cantidad
                        // Si quieres ir sumando las cantidades de guitarras:
                        // guitarraState.cantidad += guitarra.cantidad
                    }
                    return guitarraState
            })
            setCarrito(carritoActualizado)
        } else {
            setCarrito([...carrito, guitarra])
        }
    }

    const borrarProducto = guitarra => {
        const carritoActualizado = carrito.filter(guitarraState => guitarraState.id !== guitarra.id)
        console.log('carrito', carrito);
        setCarrito(carritoActualizado)
        console.log('borrar', guitarra.id);
        console.log('carrito actualizado',carritoActualizado);
    }

    const actualizarCarrito = guitarra => {
        const carritoActualizado = carrito.map(guitarraState => {
            if (guitarraState.id === guitarra.id) {
                guitarraState.cantidad = guitarra.cantidad
            }
            return guitarraState
        })
        setCarrito(carritoActualizado)
        // console.log('actualizarCarrito', guitarra.id);
    }

    return (
        <Document>
                <Outlet
                    context={{
                        agregarCarrito,
                        carrito,
                        actualizarCarrito,
                        borrarProducto
                    }}
                />
        </Document>
    )
}

function Document ({ children }) {
    return (
        <html lang="es">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Header />
                {children}
                <Footer />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}

/** Manejo de errores **/
/* Esto es para el manejo de errores en remix V2 */ 
export function ErrorBoundary() {
    const error = useRouteError();
  
    // when true, this is what used to go to `CatchBoundary`
     // Bloque 1: Verifica si el error es una respuesta de error de ruta.
    if (isRouteErrorResponse(error)) {
        // Si el error es una respuesta de error de ruta, se muestra un mensaje de error con la información de estado y texto de estado.
      return (
        
        <Document>
          <h1>Oops...</h1>
          <p className='error'>Status: {error.status} | {error.statusText}</p>
          <Link to = '/' className='error-enlace'> Volver a la pagina principal</Link>
        </Document>
      );
    }
  
    // Don't forget to typecheck with your own logic.
    // Any value can be thrown, not just errors!
     // Bloque 2: Verifica si el error es un error definido.
    let errorMessage = "Unknown error";
    if (error instanceof Error) {
         // Si el error es un error definido, se asigna el mensaje de error correspondiente.
        <Document>
            <h1>Oops...</h1>
            <p className='error'>{error.message}</p>
            <Link to = '/' className='error-enlace'> Volver a la pagina principal</Link>
        </Document>
     
    
    }
  
    // Si no se cumple ninguna de las condiciones anteriores, se muestra un mensaje genérico de error.
    return (
      <Document>
        <h1>Uh oh ...</h1>
        <p>Something went wrong.</p>
        <pre>{errorMessage}</pre>
        <Link to = '/' className='error-enlace'> Volver a la pagina principal</Link>
      </Document>
    );
  }



  
/* Esto es para el manejo de errores en remix V1 */ 
// export function CatchBoundary() {
//     const error = useCatch()
//     console.log(error)
//     return (
//         <Document>
//             <p className='error'>Hubo un error</p>
//             <p className='error'>{error.status}{error.statusText}</p>
//         </Document>
//     )
// }

// export function ErrorBoundary({ error }) {
//     console.log(error)
//     return (
//         <Document>
//             <p className='error'>Hubo un error</p>
//             <p className='error'>{error.status}{error.statusText}</p>
//         </Document>
//     )
// }
