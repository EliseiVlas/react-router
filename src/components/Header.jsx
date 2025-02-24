
// importiamo componente Logo
import Navbar from "./NavBar";


export default function Header() {

    // dati ricavati per la gestione dei link della Navbar
    const links = [
        { id: 1, text: 'Home', url: '/', current: false },
        { id: 2, text: 'Chi Siamo', url: '/chi-siamo', current: true },
        { id: 3, text: 'Lista Dei Post', url: '/lista', current: false },
        { id: 4, text: 'Piatti', url: '/piatti', current: false },
    ];

    return (
        <header>
            <Navbar linksProp={links} />
        </header>
    );
}