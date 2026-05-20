import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Contador } from "../Boton/Boton";
import { Outlet } from 'react-router-dom'; // Importamos Outlet

export function Layout({ children }) {
    return (
        <div>
            <Header />
            <main>
                {/* Aquí se renderizará el componente de la ruta activa */}
                <Outlet />
            </main>
            <Contador />    
            <Footer />
        </div>
    );
}
