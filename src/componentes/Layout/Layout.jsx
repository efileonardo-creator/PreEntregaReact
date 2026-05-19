import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Contador } from "../Boton/Boton";

export function Layout({ children }) {
    return (
        <div>
            <Header />
            <main>
                {children}
            </main>
            <Contador />    
            <Footer />
        </div>
    );
}
