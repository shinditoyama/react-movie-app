import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top py-3">
            <div className="container">
                <Link to={"/"} className="navbar-brand">LOGO.</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <NavLink to={"/"} className="nav-link">Home</NavLink>
                        <NavLink to={"/movie"} className="nav-link">Filmes</NavLink>
                        <NavLink to={"/tv"} className="nav-link">Séries</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;