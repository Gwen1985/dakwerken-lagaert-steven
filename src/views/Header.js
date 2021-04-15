import {Link} from "react-router-dom";

import logo from '../assets/images/Logo.png';
import Nav from "./Nav";

import '../assets/styles/header.css';
import headerImg from "../assets/images/99094437_280153090042466_1861327496239120384_n.jpg";


const Header = () => {

    return (

        <div className="row p-4 headerWrapper">

            <div className="col-12 p-3">
                <div className="container p-5">
                    <Link to="/">
                        <img src={logo} alt="logo" width="100%" className="logoImg"/>
                    </Link>
                </div>
            </div>


            <div className="col-12 col-sm-12 mb-5 d-flex justify-content-center">
                <Nav/>
            </div>


            <div className="col-12 col-sm-12 text-center">
                <div className="titleWrapper">

                    <h1 className="title text-white">Dakwerken Lagaert Steven</h1>

                    <p className="title_2 text-warning">UIT EVERGEM</p>

                    <p className="title_3 text-white">Dakwerken volgens het boekje.</p>

                    <Link to="/contact">
                        <button className="btn btn-outline-warning contactBtn mt-2">Contact</button>
                    </Link>
                </div>
            </div>

            <div className="col-12 col-sm-12 p-4">
                <div className="container p-5">
                    <img src={headerImg} alt="headerImg" width="100%" className="construct_img rounded-lg shadow"
                         loading="lazy"/>
                </div>
            </div>

        </div>

    )
}


export default Header;