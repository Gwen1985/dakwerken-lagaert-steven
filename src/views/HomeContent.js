import {Link} from "react-router-dom";

import werkenOpDak from "../assets/images/werken-op-dak.jpg";
import dakRamen from "../assets/images/dak-ramen.jpg";
import logo from "../assets/images/Logo.png";

import '../assets/styles/homeContent.css';


const HomeContent = () => {

    return (
        <div className="homeContent">
            <div className="row">
                <div className="container">

                    <div className="col-sm-12 pt-3 bg-white text-center">
                        <div className="container">
                            <h2 className="contentTitle text-secondary pt-5">DAKWERKEN LAGAERT STEVEN UIT
                                EVERGEM</h2>
                            <h2 className="contentTitle_2 pt-3">Uw dak tot in de puntjes afgewerkt</h2>
                            <div className="contenttextBox text-center">
                                <p className="contentText p-2">Is uw hellende of plat dak aan vervanging toe? Of
                                    wilt u een
                                    volledig
                                    nieuw dak laten
                                    plaatsen? <br/>
                                    <br/>
                                    Dakwerken Lagaert Steven klaart de klus voor u!</p>

                                <p className="contentText p-2">Zelfwerkend zaakvoerder Steven Lagaert heeft meer
                                    dan
                                    twaalf jaar
                                    ervaring en slaat voor zijn
                                    projecten de handen in elkaar met drie andere zelfstandigen. Steven
                                    garandeert u
                                    steeds
                                    een
                                    goede
                                    prijs-kwaliteit en duurzame eindresultaten.</p>
                            </div>

                            <Link to="/contact" className="offerte">offerte aanvragen <i
                                className="fas fa-arrow-right"/></Link>
                        </div>
                    </div>


                    <div className="col-sm-12 pt-3 bg-white text-center ">
                        <div className="container">

                            <div className="imageWrapper p-5">
                                <img src={werkenOpDak} alt="werken_op_dak" width="100%" className="werkenOpDak"
                                     loading="lazy"/>
                                <img src={dakRamen} alt="dak_ramen" width="100%" className="dakRamen"
                                     loading="lazy"/>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <div className="row dakpannen">

                <div className="col-12 text-white text-center p-5">

                    <h2 className="contentTitle_3 p-5">Dakwerken in het vooruitzicht?</h2>
                    <h2 className="contentTitle_2 p-3 ">Vraag gerust uw vrijblijvende offerte aan!</h2>

                    <Link to="/contact">
                        <button className="btn contacteer_btn font-weight-bold mt-2 p-3">Contacteer Steven</button>
                    </Link>
                </div>

            </div>

            <div className="row logoMidPage mt-5">

                <div className="col-sm-12 p-4">
                    <div className="container text-center p-4">
                        <Link to="/">
                            <img src={logo} alt="logo" width="100%" className="logoImg"/>
                        </Link>
                    </div>
                </div>


            </div>

            <div className="row pt-4 ">

                <div className="col-sm-12 col-md-6 p-4 d-flex justify-content-center">
                    <div className="card text-center">
                        <i className="far fa-comments p-4"/>
                        <h2 className="font-weight-bold">Duidelijke afspraken</h2>
                        <p>Steven is uw centrale aanspreekpunt tijdens alle werken.</p>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 p-4 d-flex justify-content-center">
                    <div className="card text-center">
                        <i className="fas fa-tools p-4"/>
                        <h2 className="font-weight-bold">Veelzijdig vakwerk</h2>
                        <p>Van dak- tot Gyprocwerken, Steven doet het allemaal.</p>
                    </div>
                </div>

            </div>

            <div className="row pt-4">

                <div className="col-sm-12 col-md-6 p-4 d-flex justify-content-center">
                    <div className="card text-center">
                        <i className="fab fa-envira p-4"/>
                        <h2 className="font-weight-bold">Kwaliteitsmaterialen</h2>
                        <p>U bent steeds zeker van duurzame resultaten</p>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 p-4 d-flex justify-content-center">
                    <div className="card text-center">
                        <i className="fas fa-calendar-day p-4"/>
                        <h2 className="font-weight-bold">Stipte planning</h2>
                        <p>Steven volgt altijd de vooropgestelde planning.</p>
                    </div>
                </div>

            </div>

            <div className="row p-3">
                <div className="container">

                    <div className="col-12 text-center">
                        <h2 className="talentTitle text-secondary p-3">DAKWERKEN LAGAERT STEVEN UIT EVERGEM</h2>
                        <h2 className="talentTitle_2 p-3">Talent te over</h2>

                        <p className="talentText p-2">Het dienstenpakket van Dakwerken Lagaert Steven bestaat
                            uit
                            dakwerken
                            aan
                            hellende en platte
                            daken, zinkwerken, gevelbekleding en Gyprocwerken.</p>

                        <p className="talentText p-2">Steven is uw centrale aanspreekpunt zodat u zeker kunt
                            zijn
                            van
                            duidelijke afspraken. Steven maakt graag de tijd om al uw vragen en opmerkingen te
                            beantwoorden.
                            Dakwerken Lagaert Steven is actief in heel Oost-Vlaanderen.</p>

                        <p className="talentText p-2">Wil u graag een afspraak maken? Dat kan op vrijdag en
                            zaterdag.
                            Steven bespreekt uw wensen en uw budget en kan ook een werfbezoek inplannen indien
                            mogelijk.</p>

                        <p className="talentText p-2">Nadien stelt Steven een gedetailleerde offerte op.
                            Contacteer
                            hem
                            telefonisch, via mail of vul het contactformulier in.</p>

                        <Link to="/contact">
                            <button className="btn btn-outline-dark font-weight-bold mt-2 p-3">Offerte aanvragen
                            </button>
                        </Link>
                    </div>
                </div>
            </div>


            <div className="row dinestenWrapper">
                <div className="container">
                    <div className="col-12 text-center">
                        <h2 className="dienstTitle text-white p-3">DAKWERKEN LAGAERT STEVEN UIT EVERGEM</h2>
                        <h2 className="dienstTitle_2 text-white p-3 font-weight-bold">Onze diensten</h2>
                    </div>
                </div>
            </div>

            <div className="row dienstenWrapper">

                <div className="col-sm-12 col-md-6 p-4 d-flex justify-content-center">
                    <Link to="/hellende-daken" className="text-decoration-none">
                        <div className="dienstCard text-center">
                            <i className="fas fa-home cardIcon p-4"/>
                            <h3 className="font-weight-bold p-3">HELLENDE DAKEN</h3>
                            <p className="dienstText p-4">Dakgebintes timmeren, VELUX-ramen en dakpannen
                                plaatsen,
                                dakgoten
                                installeren,…
                                Steven doet het met de grootste zorg.</p>
                        </div>
                    </Link>
                </div>


                <div className="col-sm-12 col-md-6 p-4 d-flex justify-content-center">
                    <Link to="/platte-daken" className="text-decoration-none">
                        <div className="dienstCard text-center">
                            <i className="fas fa-building cardIcon p-4"/>
                            <h3 className="font-weight-bold p-3">PLATTE DAKEN</h3>
                            <p className="dienstText p-4">Dankzij Dakwerken Lagaert Steven bent u zeker van een
                                lekvrij en
                                naadloos afgewerkt plat dak, op maat van uw woning.</p>
                        </div>
                    </Link>
                </div>

            </div>

            <div className="row dienstenWrapper">

                <div className="col-sm-12 col-md-6 p-4 d-flex justify-content-center">
                    <Link to="/zink-werken" className="text-decoration-none">
                        <div className="dienstCard text-center">
                            <i className="fas fa-tools cardIcon p-4"/>
                            <h3 className="font-weight-bold p-3">ZINKWERKEN</h3>
                            <p className="dienstText p-4">Steven plaatst dak- en hanggoten en bekleedt ze
                                vakkundig
                                in
                                diverse materialen
                                zoals hout, pvc of Trespa. </p>
                        </div>
                    </Link>
                </div>

                <div className="col-sm-12 col-md-6 p-4 d-flex justify-content-center">
                    <Link to="/gevel-bekleding" className="text-decoration-none">
                        <div className="dienstCard text-center">
                            <i className="fas fa-hammer cardIcon p-4"/>
                            <h3 className="font-weight-bold p-3">GEVELBEKLEDING</h3>
                            <p className="dienstText p-4">Voor stijlvolle en professionele gevelbekleding die
                                tegen
                                een
                                stootje kan, moet u
                                bij Dakwerken Lagaert Steven zijn. </p>
                        </div>
                    </Link>
                </div>

            </div>

            <div className="row dienstenWrapper">

                <div className="col-sm-12 col-md-6 col-lg-6 p-4 d-flex justify-content-center">
                    <Link to="/gyproc-werken" className="text-decoration-none">
                        <div className="dienstCard text-center">
                            <i className="fas fa-ruler-combined cardIcon p-4"/>
                            <h3 className="font-weight-bold p-3">GYPROCWERKEN</h3>
                            <p className="dienstText p-4">Extra slaapkamers creëren op zolder of uw volledige
                                woning
                                herinrichten, de
                                mogelijkheden zijn eindeloos met Gyproc. </p>
                        </div>
                    </Link>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-6 p-4 d-flex justify-content-center">
                    <Link to="/realisaties" className="text-decoration-none">
                        <div className="dienstCard text-center">
                            <i className="fas fa-camera cardIcon p-4"/>
                            <h3 className="font-weight-bold p-3">REALISATIES</h3>
                            <p className="dienstText p-4">Bekijk Stevens vorige projecten en doe inspiratie op
                                voor
                                uw eigen
                                werken. Zijn
                                vakmanschap zal u verbluffen. </p>
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default HomeContent;