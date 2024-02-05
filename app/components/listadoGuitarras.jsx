import Guitarra from './guitarra'

function ListadoGuitarras({ guitarras }) {
    return (
        <>
            <h1 className='heading'>Nuestra Colección</h1>
            {guitarras?.length && (
                <div className="guitarras-grid">
                    {guitarras.map(guitarra => (
                        <Guitarra
                            key={guitarra?.id}
                            guitarra={guitarra?.attributes}//Optional Chaining es útil cuando no estás seguro si un objeto o una de sus propiedades existen, y quieres evitar errores de referencia nula.Esto puede hacer que tu código sea más legible y menos propenso a errores en caso de que alguna propiedad sea null o undefined.
                        />
                    ))}
                </div>
            )}
        </>
    )
}

export default ListadoGuitarras