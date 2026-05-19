import { Contacto } from './Contacto';
import styles from './ContactoList.module.css';

export function ContactoList({ empleados }) {
return (
    <div className={styles.contacto}>
        {empleados.map(empleado => (
        <Contacto key={empleado.id} {...empleado} />
       ))}
    </div>
);
}