import {Link} from "react-router-dom";

import Nav from "./Nav";
import Footer from "./Footer";

import logo from "../assets/images/Logo.png";
import gevel_1 from "../assets/images/gevel_1.jpg";

import '../assets/styles/gevelbekleding.css';


const GevelBekleding = () => {

    return (
        <div className="container-fluid">

            <div className="gevelHeader">
                <div className="row gevelHeaderImg">
                    <div className="col-9 col-sm-9 col-lg-4 p-5">
                        <Link to="/">
                            <img src={logo} alt="logo" width="100%" className="logoImg"/>
                        </Link>
                    </div>

                    <div className="col-3 col-sm-3 col-lg-8 pt-5 d-flex justify-content-center">
                        <Nav/>
                    </div>

                    <div className="col-12 text-center">
                        <div className="container p-3">
                            <h1 className="text-white p-3"> Gevelbekleding </h1>
                            <p className="headerTitle text-white p-3">Kwalitatieve gevelbekleding met pvc, Trespa,
                                sidings of
                                hout. </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row my-5">

                    <div className="col-sm-12 col-xl-6 order-xl-2">
                        <div className="container p-2">
                            <h2 className="contentTitle text-secondary text-center">DAKWERKEN LAGAERT STEVEN UIT
                                EVERGEM</h2>

                            <h2 className="contentTitle_2 py-2">Uw gevel in een nieuw jasje</h2>

                            <p className="contentText mt-2">Om uw verweerde of beschadigde gevels een nieuwe look
                                aan te meten, bent u bij Dakwerken Lagaert Steven aan het juiste adres. Steven weet met
                                iedere stijl raad, van modern tot klassiek. Hij bekleedt uw gevel met materialen zoals
                                pvc,
                                Trespa, sidings of hout.</p>

                            <p className="contentText">Uw wensen en budget staan steeds centraal. Dankzij de
                                expertise van Dakwerken Lagaert Steven kunt u in een mum van tijd genieten van prachtige
                                resultaten die volledig in lijn met uw woning liggen.</p>
                        </div>
                    </div>


                    <div className="col-sm-12 col-xl-6 order-xl-1 d-flex justify-content-center">
                        <div className="container mt-xl-5">
                            <img src={gevel_1} alt="gevel" className="contentImg" width="100%"/>
                        </div>

                    </div>

                </div>

            </div>

            <div className="row gevelMidImg">

                <div className="col-12 text-white text-center p-5">

                    <h2 className="contentTitle_3 p-5"> Uw gevel opfrissen?</h2>
                    <h2 className="contentTitle_2 p-3">Vraag gerust uw vrijblijvende offerte aan!</h2>

                    <Link to="/contact">
                        <button className="btn contacteer_btn font-weight-bold mt-2 p-3">Contacteer Steven</button>
                    </Link>
                </div>

            </div>

            <Footer/>

        </div>

    )
}

export default GevelBekleding;