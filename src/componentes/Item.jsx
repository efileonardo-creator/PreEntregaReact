import styles from './Item.module.css';
// Recibe las props usando destructuring
export function Item({ nombre, precio, stock }) {
return (
    <div className={styles.item}>
        <h3>{nombre}</h3>
        <p>Precio: ${precio}</p>
        <p>Stock disponible: {stock}</p>
        <button>Comprar</button>
    </div>
    );
}