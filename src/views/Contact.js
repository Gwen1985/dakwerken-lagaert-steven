import {Link} from "react-router-dom";

import Nav from "./Nav";
import Footer from "./Footer";

import logo from "../assets/images/Logo.png";

import '../assets/styles/contact.css';


const Contact = () => {

    return (
        <div className="container-fluid">

            <div className="contactHeader">
                <div className="row contact">
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
                            <h1 className="text-white p-3"> Contact </h1>
                            <p className="text-white p-3">Steven staat steeds voor u klaar!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-lg-6 p-5">
                        <h2 className="contentTitle text-secondary text-center pt-5">DAKWERKEN LAGAERT STEVEN UIT
                            EVERGEM</h2>

                        <h2 className="text-center p-3">Onze gegevens</h2>

                        <p className="contentText text-center p-2">Wenst u meer informatie over het dienstenpakket of
                            wil u
                            een offerte
                            aanvragen? Contacteer Steven dan via onderstaande gegevens of vul het contactformulier
                            in.</p>


                        <div className="container p-5">
                            <a href="https://goo.gl/maps/UhEHFrsD3Eh1ZoR89" target="_blank" rel="noreferrer"
                               className="text-decoration-none text-dark">
                                <p>
                                    <i className="fas fa-map-marker-alt text-warning mr-2 mt-2"/>
                                    Durmestraat 28, 9940 Evergem
                                </p>
                            </a>

                            <a href="tel: 0032497219273" className="text-decoration-none text-dark">
                                <p>
                                    <i className="fas fa-mobile-alt text-warning mr-2"/>
                                    0497/21.92.73
                                </p>
                            </a>

                            <a href="mailto: info@dakwerken-lagaertsteven.be"
                               className="text-decoration-none text-dark">
                                <p>
                                    <i className="fas fa-envelope-open text-warning mr-2"/>
                                    info@dakwerken-lagaertsteven.be
                                </p>
                            </a>


                            <p><i className="fas fa-building text-warning mr-2"/>BE 0732.478.078</p>
                        </div>
                    </div>


                    <div className="col-sm-12 col-lg-6 p-5">

                        <h2 className="text-center p-3">Contactformulier</h2>

                        <p className="contentText text-center p-2">Stel hieronder uw vraag en Steven helpt u zo snel
                            mogelijk verder.</p>


                        <div className="container text-center p-5">
                            <form method="">

                                <ul className="list-unstyled">
                                    <li>
                                        <label htmlFor="Naam">

                                            <input type="text" required={true} placeholder="Naam" id="Naam"/>
                                        </label>
                                    </li>

                                    <li>
                                        <label form="Adres">
                                            <input type="text" required={true} placeholder="Adres" id="Adres"/>
                                        </label>
                                    </li>

                                    <li>
                                        <label form="Tel">
                                            <input type="text" required={true} placeholder="Telefoon" id="Tel"/>
                                        </label>
                                    </li>

                                    <li>
                                        <label form="Email">
                                            <input type="email" required={true} placeholder="Email" id="Email"/>
                                        </label>
                                    </li>

                                    <li>
                                        <label htmlFor="Bericht">
                                            <textarea placeholder="Bericht" required={true} id="Bericht"/>
                                        </label>
                                    </li>

                                    <li>

                                        <input type="checkbox"  required={true} className="mr-2"/>
                                        Ik ga ermee akkoord dat de ingevoerde informatie gebruikt zal worden om contact
                                        met mij op te nemen.
                                    </li>

                                    <li>
                                        <input type="submit" className="mt-5"/>
                                    </li>
                                </ul>

                            </form>
                        </div>
                    </div>

                </div>
            </div>

            <Footer/>

        </div>

    )
}

export default Contact;