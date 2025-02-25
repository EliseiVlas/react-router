import { NavLink } from "react-router-dom";


export default function Navbar(props) {

    return (
        <nav>
            <ul>
                {props.linksProp.map((link) => (
                    <li key={link.id}>
                        <NavLink to={link.url}>
                            {link.text}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}    