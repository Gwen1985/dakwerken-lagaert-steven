import {Link} from "react-router-dom";

import logo from '../assets/images/Logo.png';
import Nav from "./Nav";

import '../assets/styles/header.css';


const Header = () => {

    return (


        <div className="row p-4 headerWrapper">

            <div className="col-9 col-sm-9 col-lg-4">
                <div className="container p-5">
                    <Link to="/">
                        <img src={logo} alt="logo" width="100%" className="logoImg"/>
                    </Link>
                </div>
            </div>


            <div className="col-3 col-sm-3 col-lg-8 pt-5 d-flex justify-content-center">
                <Nav/>
            </div>


            <div className="col-12 text-center">
                <div className="titleWrapper">

                    <h1 className="title text-white">Dakwerken Lagaert Steven</h1>

                    <p className="title_2 text-warning">UIT EVERGEM</p>

                    <p className="title_3 text-white">Dakwerken volgens het boekje.</p>

                    <Link to="/contact">
                        <button className="btn btn-outline-warning contactBtn mt-2">Contact</button>
                    </Link>
                </div>
            </div>

        </div>


    )
}


export default Header;