import styles from'./Header.module.css';
import { Link } from 'react-router-dom'; // 1. Importamos Link

function Header() {
return (
    <header className={styles.header}>
       <div>Bienvenidos a mi App React</div>
        <nav>
            <ul>
            {/* 2. Usamos Link en lugar de <a> y 'to' en lugar de 'href' */}
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                <li><Link to="/producto/1">Detalle Producto</Link></li>
                <li><Link to="/carrito">Carrito</Link></li>
            </ul>
        </nav>
    </header>

);
}
export default Header;