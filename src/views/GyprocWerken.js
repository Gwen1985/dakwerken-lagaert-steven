import {Link} from "react-router-dom";

import Nav from "./Nav";
import Footer from "./Footer";

import logo from "../assets/images/Logo.png";
import gyprocImg from "../assets/images/gyprocImg.jpg";

import '../assets/styles/gyprocwerken.css'


const GyprocWerken = () => {

    return (
        <div className="container-fluid">

            <div className="contactHeader">
                <div className="row gyprocHeaderImg">
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
                            <h1 className="text-white p-3"> Gyprocwerken </h1>
                            <p className="text-white p-3">Van kleine kamers & zolders tot volledige woningen.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-lg-6 p-5">
                        <h2 className="contentTitle text-secondary text-center pt-5">DAKWERKEN LAGAERT STEVEN UIT
                            EVERGEM</h2>

                        <h2 className="text-center p-3">Uw ruimtes optimaal benut</h2>

                        <p className="contentText text-center p-2">Wil u graag een extra slaapkamer creëren op zolder of
                            valse wanden en plafonds laten plaatsen? Dakwerken Lagaert Steven helpt u graag met
                            Gyprocwerken.</p>

                        <p className="contentText text-center p-2">In eender welke ruimte kan Steven Gyprocplaten
                            plaatsen, naargelang uw behoeften. De platen kunt u achteraf eenvoudig overschilderen of
                            behangen.</p>

                        <p className="contentText text-center p-2">Van kleine kamers en zolders herinrichten tot
                            volledige woningen onder handen nemen, Steven doet het allemaal met plezier.</p>

                        <p className="contentText text-center p-2">Steven zit eerst met u samen om uw plannen te
                            bespreken
                            en vertaalt uw wensen nadien zorgvuldig naar de realiteit.</p>

                        <p className="contentText text-center p-2">Ga voor de inrichting van uw dromen met Dakwerken
                            Lagaert Steven!</p>

                    </div>


                    <div className="col-sm-12 col-lg-6 p-5 d-flex justify-content-center">

                        <img src={gyprocImg} alt="gyprocImg" width="100%"/>
                    </div>


                </div>

            </div>

            <div className="row gyprocMidImg">

                <div className="col-12 text-white text-center p-5">

                    <h2 className="contentTitle_3 p-5">Gyproc voor uw interieur?</h2>
                    <h2 className="contentTitle_2 p-3 ">Vraag gerust uw vrijblijvende offerte aan!</h2>

                    <Link to="/contact">
                        <button className="btn contacteer_btn font-weight-bold mt-2 p-3">Contacteer Steven</button>
                    </Link>
                </div>

            </div>

            <Footer/>

        </div>

    )
}

export default GyprocWerken;