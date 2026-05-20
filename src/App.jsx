
import './App.css'
import { Layout } from './componentes/Layout/Layout';
import { ItemListContainer } from './componentes/Item/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {


  return (

    <Routes>{/*envuelve a las demás para mostrar Header y Footer siempre */}
        <Route element={<Layout />}>
        <Route path="/" element={<h1>Bienvenido a mi tienda Online</h1>} />
        <Route path="/productos" element={<ItemListContainer Mensaje={"Productos destacados"}/>} />
//falta crear el componente producto-- id

//falta crear el carrito

        </Route>
    </Routes>
    );

}

export default App
