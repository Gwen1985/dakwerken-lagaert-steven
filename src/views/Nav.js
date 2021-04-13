import {Link} from "react-router-dom";
import {useEffect} from "react";
import gsap from "gsap";


import "../Nav.css";


const Nav = () => {

    useEffect(() => {
        const tl = gsap.timeline({duration: 0.5, delay: 0.2, ease: "power2"});

        tl.fromTo('.first', {opacity: "0%"}, {opacity: "100%", fontSize: "24px"});
        tl.fromTo('.second', {opacity: "0%"}, {opacity: "100%", fontSize: "24px"});
        tl.fromTo('.third', {opacity: "0%"}, {opacity: "100%", fontSize: "24px"});
        tl.fromTo('.forth', {opacity: "0%"}, {opacity: "100%", fontSize: "24px"})
    });

    return (

            <div className="navbar bg-dark">

                <ul className="nav text-white">
                    <li className="first nav-item list-unstyled">
                        <Link to="/" className="link nav-link text-white active">Home</Link>
                    </li>

                    <li className="second nav-item list-unstyled ml-2">
                        <div className="dropdown">
                            <Link className="second dropbtn btn btn-dark text-white">Diensten <i className="fas fa-angle-double-down"/>
                            </Link>
                            <div className="dropdown-content">
                                <Link to="/hellende-daken" className="link nav-link">Hellendedaken</Link>
                                <Link to="/platte-daken" className="link nav-link">Plattedaken</Link>
                                <Link to="/zink-werken" className="link nav-link">Zinkwerken</Link>
                                <Link to="/gevel-bekleding" className="link nav-link">Gevelbekleding</Link>
                                <Link to="/gyproc-werken" className="link nav-link">Gyprocwerken</Link>
                            </div>
                        </div>
                    </li>

                    <li className="third nav-item list-unstyled">
                        <Link to="/realisaties" className="link nav-link text-white">Realisaties</Link>
                    </li>

                    <li className="forth nav-item list-unstyled">
                        <Link to="/contact" className="link nav-link text-white">Contact</Link>
                    </li>
                </ul>

            </div>

    )
}


export default Nav;