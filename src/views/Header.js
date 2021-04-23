import {Link} from "react-router-dom";

import logo from '../assets/images/Logo.png';
import Nav from "./Nav";

import pnglogo from '../assets/images/304713.png';

import '../assets/styles/header.css';


const Header = () => {

    return (

        <div className="row headerWrapper pnglogo p-4">

            <div className="col-9 col-sm-9 col-lg-4 ">
                <div className="container p-5">

                    <Link to="/">
                        <img src={logo} alt="logo" width="100%" className="logoImg"/>
                    </Link>
                </div>
            </div>


            <div className="col-3 col-sm-3 col-lg-8 navigation pt-5 d-flex justify-content-center ">
                <Nav/>
            </div>

            <div className="container-fluid ">
                <div className="row text-center">
                    <div className="col-12  text-white">

                        <div className="titleWrapper">

                            <img src={pnglogo} alt="logo" width="25%"/>
                            <h1 className="title mt-2">Dakwerken Lagaert Steven</h1>

                            <p className="title_2 text-warning">UIT EVERGEM</p>

                            <p className="title_3">Dakwerken volgens het boekje.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}


export default Header;