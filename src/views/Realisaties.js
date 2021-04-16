import Footer from "./Footer";

import '../assets/styles/real.css';
import logo from "../assets/images/Logo.png";
import {Link} from "react-router-dom";
import Nav from "./Nav";


const Realisaties = () => {

    return (
        <div className="realisaties">
            <div className="container-fluid real">

                <div className="row ">
                    <div className=" col-9 col-sm-9 col-lg-4 p-5">
                        <Link to="/">
                            <img src={logo} alt="logo" width="100%" className="logoImg"/>
                        </Link>
                    </div>

                    <div className="col-3 col-sm-3 col-lg-8 pt-5 d-flex justify-content-center">
                        <Nav/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 text-center">
                        <div className="container p-3">
                            <h1 className="text-white"> Realisaties </h1>
                            <p className="text-white">Elk project tot in de puntjes afgewerkt.</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row">
                <div className="col-12">

                    <div className="container p-5 text-center">
                        <h2>Onovertrefbaar vakmanschap</h2>

                        <p className="p-3">Bekijk hier de vorige projecten van Dakwerken Lagaert Steven en laat u overtuigen door een
                            ervaren vakmanschap waarbij duurzaamheid centraal staat.</p>
                    </div>

                </div>
            </div>


            <Footer/>

        </div>

    )
}


export default Realisaties;