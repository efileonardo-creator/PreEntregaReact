import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

    const ProductoDetalle = () => {
    const [producto, setProducto] = useState(null);
    const { id } = useParams();
    // Con este 'id', podríamos hacer una llamada a una API para buscar los datos del producto
    useEffect(() => {
        fetch('/datos/productos.json') // Supongamos que tenemos un archivo JSON con los productos
        .then(response => response.json())
        .then(data => {
            const producto = data.find(p => p.id === parseInt(id));
            setProducto(producto);
        })
        .catch(error => console.error('Error al cargar el producto:', error));
    }, [id]);

    if (!producto) {
        return <div>Cargando producto...  </div>;
    }

    if (!producto.id) {
        return <div>Producto no encontrado</div>;
    }
return (
    <div>
    <h2>Detalle del Producto {producto.nombre}</h2>
    <p>{producto.descripcion}</p>
    <p>Precio: ${producto.precio}</p>
    <img src={producto.img} alt={producto.nombre} />
    </div>
    );
};
export default ProductoDetalle;