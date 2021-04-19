import {Link} from "react-router-dom";

import Nav from "./Nav";
import Footer from "./Footer";


import logo from "../assets/images/Logo.png";
import zinkhouse from "../assets/images/zinkhouse.jpg";
import zinkHerstel from "../assets/images/zinkHerstel.jpg";

import '../assets/styles/zinkwerken.css';


const ZinkWerken = () => {

    return (
        <div className="container-fluid">

            <div className="zinkHeader">
                <div className="row zinkHeaderImg">
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
                            <h1 className="text-white p-3"> Zinkwerken </h1>
                            <p className="headerTitle text-white p-3">Dak- en hanggoten in pvc, hout & Trespa.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">

                    <div className="col-sm-12 col-lg-6 p-5">
                        <h2 className="contentTitle text-secondary text-center pt-5">DAKWERKEN LAGAERT STEVEN UIT
                            EVERGEM</h2>

                        <h2 className="text-center p-3">Elegante uitstraling</h2>

                        <p className="contentText text-center p-2">Een vakkundig geplaatste dakgoot biedt heel wat
                            voordelen. Uw dak ziet er niet alleen netjes afgewerkt uit maar u bent ook zeker van een
                            goede waterafvoer.</p>

                        <p className="contentText text-center p-2">Dakwerken Lagaert Steven regelt die klus dan ook
                            graag voor u. Steven plaatst dak- en hanggoten bij hellende en platte daken en bekleedt ze
                            in pvc, hout of Trespa.</p>

                    </div>


                    <div className="col-sm-12 col-lg-6 p-5 d-flex justify-content-center">

                        <img src={zinkhouse} alt="zinkHouse" width="100%"/>
                    </div>

                </div>

            </div>

            <div className="row zinkMidImg">

                <div className="col-12 text-white text-center p-5">

                    <h2 className="contentTitle_3 p-5"> Zinkwerken nodig?</h2>
                    <h2 className="contentTitle_2 p-3">Vraag gerust uw vrijblijvende offerte aan!</h2>

                    <Link to="/contact">
                        <button className="btn contacteer_btn font-weight-bold mt-2 p-3">Contacteer Steven</button>
                    </Link>
                </div>

            </div>

            <div className="container">
                <div className="row">

                    <div className="col-sm-12 col-lg-6 order-lg-2 p-5">
                        <h2 className="contentTitle text-secondary text-center pt-5">DAKWERKEN LAGAERT STEVEN UIT
                            EVERGEM</h2>

                        <h2 className="text-center p-3">Herstellingen</h2>

                        <p className="contentText text-center p-2">Vertoont uw huidige dakgoot scheuren of lekken? Dan
                            voert Steven de nodige renovaties of herstellingen uit met oog voor detail.</p>

                        <p className="contentText text-center p-2">Bij Dakwerken Lagaert Steven staat een transparante
                            communicatie bovendien centraal. Zo bent u zeker van een duidelijke en klantvriendelijke
                            service.</p>

                    </div>

                    <div className="col-sm-12 col-lg-6 order-lg-1 p-5 d-flex justify-content-center">

                        <img src={zinkHerstel} alt="ZinkHerstel" width="100%"/>
                    </div>
                </div>

            </div>


            <Footer/>

        </div>

    )
}

export default ZinkWerken;