import { Link } from "@remix-run/react";

function Guitarra( { guitarra } ) {

    const {  imagen,nombre, precio,descripcion, url } = guitarra
    const imagenUrl = imagen.data.attributes.formats.medium.url

    return (
        <div className="guitarra">
            <img src={imagenUrl} alt={`Guitarra ${nombre}`} className="imagen"/>
            <div className="contenido">
                <h3>{nombre}</h3>
                <p className="descripcion">{descripcion}</p>
                <p className="precio">${precio}</p>

                <Link to={`/guitarras/${url}`} className="enlace">  
                    Ver producto
                </Link>

            </div>
        </div>
    
    )
}

export default Guitarra