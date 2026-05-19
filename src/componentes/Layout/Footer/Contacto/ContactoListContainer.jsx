import { ContactoList } from './ContactoList';
import styles from './ContactoListContainer.module.css';
import React, { useState, useEffect } from 'react';
export function ContactoListContainer() {

    const [empleados, setEmpleados] = useState([]);
    const [error, setError] = useState(null);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        fetch('/data/empleados.json')
            .then((respuesta) => {
                if (!respuesta.ok) {
                    throw new Error('No se pudo cargar la información de los empleados');
                }
                return respuesta.json();
            })
            .then((datos) => {
                setEmpleados(datos);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setCargando(false);
            });
    }, []);

    if (cargando) {
        return <p>Conocé nuestro staff...</p>;
    }

    if (error) {
        return <p>Error al cargar la información de los empleados.</p>;
    }

    return (
        <>
            <div className={styles.contacto}>
                <ContactoList empleados={empleados} />
            </div>
        </>
    );
}