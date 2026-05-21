
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './componentes/Layout/Layout';
import { ItemListContainer } from './componentes/Item/ItemListContainer';
import {Carrito} from './componentes/Carrito/Carrito';
import BuscarItem from './componentes/BuscarItem/BuscarItem';

function App() {
  return (
      <Routes>
        <Route element={<Layout />}> {/* Layout se renderiza para todas las rutas anidadas */}
        <Route path="/" element={<h1>Bienvenido a mi tienda Online</h1>} /> {/* Ruta de inicio */}
        <Route path="/productos" element={<ItemListContainer Mensaje={"Productos destacados"} />} /> {/* Ruta para productos */}
        <Route path="/producto/:id" element={<BuscarItem  />} /> {/* Ruta para producto por ID */}
        <Route path="/carrito" element={<Carrito />} /> {/* Ruta para el carrito de compras */}
        </Route>
      </Routes>
  );
}

export default App
