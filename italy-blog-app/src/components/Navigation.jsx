import './css/Navigation.css';
import {Outlet, Link} from "react-router-dom";

function Navigation() {
    return(
    <nav id="main-nav">
        <ul>
            <li>
                <Link to="/"> Home </Link>
                <Link to="/about"> About </Link>
                <Link to="/blog"> Italy </Link>
            </li>
        </ul>
    </nav>

    );
};

export default Navigation;