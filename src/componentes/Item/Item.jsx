import styles from './Item.module.css';
import { Contador } from '../Boton/Contador';

// Recibe las props usando destructuring
export function Item({ Nombre, Descripcion, Precio, Imagen }) {
    return (
        <div className={styles.item}>
            <h3>{Nombre}</h3>
            <img src={Imagen} alt={Nombre} width="150" height="auto" />
            <p>{Descripcion}</p>
            <p>Precio: ${Precio}</p>

            <br />
            <Contador />
            <button> Comprar </button>
        </div>
    );
}