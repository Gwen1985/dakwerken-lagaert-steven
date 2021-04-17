import {Link} from "react-router-dom";

import Nav from "./Nav";
import Footer from "./Footer";

import logo from "../assets/images/Logo.png";
import rt from "../assets/images/rt.jpg";
import platKoepel from '../assets/images/platKoepel.jpg';

import '../assets/styles/platteDaken.css';


const PlatteDaken = () => {

    return (

        <div className="container-fluid">

            <div className="contactHeader">
                <div className="row platHeaderImg">
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
                            <h1 className="text-white p-3"> Platte daken </h1>
                            <p className="text-white p-3">Met roofing en EPDM van topmerken als Resitrix en
                                Mastersystems.

                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">

                    <div className="col-sm-12 col-lg-6 order-lg-2 p-5">
                        <h2 className="contentTitle text-secondary text-center pt-5">DAKWERKEN LAGAERT STEVEN UIT
                            EVERGEM</h2>

                        <h2 className="text-center p-3">Vermijd schade of lekken</h2>

                        <p className="contentText text-center p-2">Zoekt u een ervaren dakwerker om uw platte dak te
                            dichten? Dan kunt u terecht bij Dakwerken Lagaert Steven. Steven gaat aan de slag met
                            verschillende kwaliteitsmaterialen.</p>

                        <p className="contentText text-center p-2">Zo maakt hij bijvoorbeeld gebruik van roofing en EPDM
                            van de merken Resitrix en Mastersystems. U bent steeds verzekerd van een naadloze
                            afwerking.</p>

                    </div>


                    <div className="col-sm-12 col-lg-6 order-lg-1 p-5 d-flex justify-content-center">

                        <img src={rt} alt="rooof" width="100%"/>
                    </div>

                </div>

            </div>

            <div className="row platMidImg">

                <div className="col-12 text-white text-center p-5">

                    <h2 className="contentTitle_3 p-5"> Uw plat dak aanpakken?</h2>
                    <h2 className="contentTitle_2 p-3">Vraag gerust uw vrijblijvende offerte aan!</h2>

                    <Link to="/contact">
                        <button className="btn contacteer_btn font-weight-bold mt-2 p-3">Contacteer Steven</button>
                    </Link>
                </div>

            </div>

            <div className="container">
                <div className="row">

                    <div className="col-sm-12 col-lg-6 p-5">
                        <h2 className="contentTitle text-secondary text-center pt-5">DAKWERKEN LAGAERT STEVEN UIT
                            EVERGEM</h2>

                        <h2 className="text-center p-3">Uitgebreid advies</h2>

                        <p className="contentText text-center p-2">Dakwerken Lagaert Steven staat u graag bij met
                            gericht advies over materialen.</p>

                        <p className="contentText text-center p-2">Steven komt uw dak inspecteren en bepaalt samen met u
                            de ideale oplossing op maat van uw woning, achterbouw of garage.</p>

                        <p className="contentText text-center p-2">Dankzij zijn uitgebreide vakkennis bent u zeker van
                            een lekvrij plat dak, dat jarenlang meegaat.</p>

                    </div>

                    <div className="col-sm-12 col-lg-6 p-5 d-flex justify-content-center">

                        <img src={platKoepel} alt="dakpanzwart" width="100%"/>
                    </div>
                </div>

            </div>


            <Footer/>

        </div>

    )
}


export default PlatteDaken;