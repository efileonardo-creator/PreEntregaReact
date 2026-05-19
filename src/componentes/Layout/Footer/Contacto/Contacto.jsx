
// Recibe las props usando destructuring
export function Contacto({ Nombre, Telefono, Email, Puesto }) {
return (
    <div>
        <h3>{Nombre}</h3>
        <p>Teléfono: {Telefono}</p>
        <p>Email: {Email}</p>
        <p>Puesto: {Puesto}</p>
        <button>Contactar</button>
    </div>
    );
}