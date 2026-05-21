
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './componentes/Layout/Layout';
import { ItemListContainer } from './componentes/Item/ItemListContainer';
import { ProductosId } from './componentes/ProductosId/ProductosId';
import { Carrito } from './componentes/Carrito/Carrito';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<h1>Bienvenido a mi tienda Online</h1>} />
          <Route path="/productos" element={<ItemListContainer Mensaje={"Productos destacados"} />} />
          <Route path="/producto/:id" element={<ProductosId />} />
          <Route path="/carrito" element={<Carrito />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
