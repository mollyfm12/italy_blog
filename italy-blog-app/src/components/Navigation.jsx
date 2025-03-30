import './css/Navigation.css';
import {Outlet, Link} from "react-router-dom";

function Navigation() {
    return(
    <nav id="main-nav">
        <ul>
            <li>
                <Link to="/"> Home </Link>
                <Link to="/Florence"> Florence </Link>
                <Link to="/Italy"> Around Italy </Link>
                <Link to="/Euro"> Around Europe & Africa </Link>
                <Link to="/FAQ"> FAQ </Link>
            </li>
        </ul>
    </nav>

    );
};

export default Navigation;