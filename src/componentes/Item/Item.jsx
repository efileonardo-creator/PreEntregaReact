import styles from './Item.module.css';
// Recibe las props usando destructuring
export function Item({ Nombre, Descripcion, Precio, Imagen }) {
    return (
        <div className={styles.item}>
            <h3>{Nombre}</h3>
            <p>{Descripcion}</p>
            <p>Precio: ${Precio}</p>
            <img src={Imagen} alt={Nombre} width="150" height="150" />
            <button>Comprar</button>
        </div>
    );
}