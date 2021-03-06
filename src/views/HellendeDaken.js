import {Link} from "react-router-dom";

import Nav from "./Nav";
import Footer from "./Footer";

import logo from "../assets/images/Logo.png";
import ttt from "../assets/images/ttttt.jpg"
import dakpanzwart from "../assets/images/dakpanzwart.jpg";

import '../assets/styles/hellendeDaken.css';


const HellendeDaken = () => {

    return (
        <div className="container-fluid">

            <div className="helHeader">
                <div className="row helHeaderImg">
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
                            <h1 className="text-white p-3"> Hellende daken </h1>
                            <p className="headerTitle text-white p-3">Van kleine timmerwerken tot dakkoepels
                                plaatsen.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row my-5">
                    <div className="col-sm-12 col-xl-6">
                        <div className="container p-2">
                            <h2 className="contentTitle text-secondary text-center">DAKWERKEN LAGAERT STEVEN UIT
                                EVERGEM</h2>

                            <h2 className="contentTitle_2 py-2">Totaal service</h2>

                            <p className="contentText mt-2">Dakwerken Lagaert Steven voert zowel in nieuwbouw–
                                als renovatieprojecten dakwerken uit met oog voor detail.</p>

                            <p className="contentText">Stevens dienstenpakket is erg uitgebreid: hij timmert
                                dakgebintes, plaatst isolatie, VELUX-ramen en dakkoepels en bekleedt uw dak met
                                dakpannen of
                                leien.</p>

                            <p className="contentText">Verder installeert en bekleedt hij ook dakgoten en
                                voert hij kleine timmerwerken uit. Zijn service is snel en efficiënt.
                            </p>
                        </div>
                    </div>

                    <div className="col-sm-12 col-xl-6 d-flex justify-content-center">
                        <div className="container mt-xl-5">
                            <img src={ttt} alt="rooof" className="contentImg" width="100%"/>
                        </div>
                    </div>

                </div>
            </div>

            <div className="row helMidImg">
                <div className="col-12 text-white text-center p-5">
                    <h2 className="contentTitle_3 p-5">Uw hellend dak aanpakken?</h2>
                    <h2 className="contentTitle_2 p-3 ">Vraag gerust uw vrijblijvende offerte aan!</h2>
                    <Link to="/contact">
                        <button className="btn contacteer_btn font-weight-bold mt-2 p-3">Contacteer Steven</button>
                    </Link>
                </div>
            </div>

            <div className="container">
                <div className="row my-5">

                    <div className="col-sm-12 col-xl-6 order-xl-2">
                        <div className="container p-2">
                            <h2 className="contentTitle text-secondary text-center pt-5">DAKWERKEN LAGAERT STEVEN UIT
                                EVERGEM</h2>

                            <h2 className="contentTitle_2 py-2">Diverse dakpannen</h2>

                            <p className="contentText mt-2">Eerst zit Steven met u samen om uw plannen te
                                bespreken. Hij kan exact bepalen of er renovatiewerken en herstellingen nodig zijn, of
                                dat u
                                best voor een volledig nieuw dak gaat.</p>

                            <p className="contentText ">Zijn specialisatie is dakpannen plaatsen. U heeft de
                                keuze uit een ruim assortiment aan kleuren, vormen en afwerkingen (bv. mat of glanzend).
                                Stijlvolle en waterdichte resultaten gegarandeerd!.</p>

                        </div>
                    </div>

                    <div className="col-sm-12 col-xl-6 order-xl-1 d-flex justify-content-center">
                        <div className="container mt-xl-5">
                            <img src={dakpanzwart} alt="dakpanzwart" className="contentImg" width="100%"
                                 loading="lazy"/>
                        </div>
                    </div>


                </div>

            </div>


            <Footer/>

        </div>

    )
}


export default HellendeDaken;