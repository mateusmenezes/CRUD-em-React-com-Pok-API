import { Link } from "react-router-dom";
import "./header.css";

function Header(){
    return(
        <header>
            <Link className="logo" to="/">PokeApp</Link>
            <Link className="favoritos" to="/favoritos">Favoritos</Link>
        </header>
    );
}

export default Header;