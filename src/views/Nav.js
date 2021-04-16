import {Link} from "react-router-dom";

import "../assets/styles/Nav.css";


const Nav = () => {

    return (

        <nav>
            <div className="hamburger">

                <div className="dropdown">
                    <i className="fas fa-bars"/>

                    <div className="dropdown-content">
                        <ul className="nav-link pl-3">

                            <li className="nav-link list-unstyled">
                                <Link to="/" className="link text-white">Home</Link>
                            </li>

                            <li className="nav-link list-unstyled">
                                <Link to="/" className="link text-white">
                                    Diensten
                                    <span><i className="fas fa-angle-down text-white pl-2"/></span>
                                </Link>
                            </li>

                            <li className="nav-link list-unstyled">
                                <Link to="/realisaties" className="link text-white">Realisaties</Link>
                            </li>

                            <li className="nav-link list-unstyled">
                                <Link to="/contact" className="link text-white">Contact</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

            <div className="navbar">
                <ul className="nav text-white">
                    <li className="nav-item list-unstyled">
                        <Link to="/" className="first link nav-link text-white active">Home</Link>
                    </li>

                    <li className="nav-item list-unstyled ml-2">
                        <div className="dropdown">

                            <Link className="second dropbtn link nav-link text-white">Diensten <i
                                className="fas fa-angle-down text-white"/>
                            </Link>

                            <div className="dropdown-content">

                                <Link to="/hellende-daken" className="link nav-link text-white">Hellendedaken</Link>
                                <Link to="/platte-daken" className="link nav-link text-white">Plattedaken</Link>
                                <Link to="/zink-werken" className="link nav-link text-white">Zinkwerken</Link>
                                <Link to="/gevel-bekleding" className="link nav-link text-white">Gevelbekleding</Link>
                                <Link to="/gyproc-werken" className="link nav-link text-white">Gyprocwerken</Link>

                            </div>

                        </div>
                    </li>

                    <li className="nav-item list-unstyled">
                        <Link to="/realisaties" className="third link nav-link text-white">Realisaties</Link>
                    </li>

                    <li className="nav-item list-unstyled">
                        <Link to="/contact" className="fourth link nav-link text-white">Contact</Link>
                    </li>
                </ul>
            </div>

        </nav>


    )
}


export default Nav;