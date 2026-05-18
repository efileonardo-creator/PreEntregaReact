
import './App.css'
import { Layout } from './componentes/Layout/Layout';
import { ItemListContainer } from './componentes/ItemListContainer';

function App() {


  return (
    <div>
        <Layout>
            <h1>Bienvenido a mi tienda Online</h1>
            <ItemListContainer Mensaje="Productos que puedes elegir" />
        </Layout>
    </div>
    
);

}

export default App
