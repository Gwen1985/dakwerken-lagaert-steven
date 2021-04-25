import {Link} from "react-router-dom";

import '../assets/styles/homeContent.css';
import risingRoof from '../assets/images/Raising_roof2.jpg';


const HomeContent = () => {

    return (
        <div className="homeContent">

            <div className="row">

                <div className="col-sm-12 col-lg-6 pt-3">

                    <div className="container pt-3">

                        <h2 className="contentTitle text-center text-secondary pt-5">DAKWERKEN LAGAERT STEVEN UIT
                            EVERGEM</h2>
                        <h2 className="contentTitle_2 text-center py-5">Uw dak tot in de puntjes afgewerkt</h2>
                        <div className="container p-5">
                            <p className="contentText p-3">Is uw hellend of plat dak aan vervanging toe?
                                <br/>
                                Of
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
                                projecten de handen in elkaar met drie andere zelfstandigen.</p>

                            <p className="contentText p-2">Steven
                                garandeert u
                                steeds
                                een
                                goede
                                prijs-kwaliteit en duurzame eindresultaten.</p>
                        </div>

                    </div>

                </div>

                <div className="col-sm-12 col-lg-6 p-5  d-flex justify-content-center">
                    <img src={risingRoof} alt="rooof" className="contentImg risingRoof" width="100%" height="75%"/>
                </div>

            </div>

            <div className="row homeMidImg">

                <div className="col-12 text-white text-center p-5">

                    <h2 className="contentTitle_3 p-5">Dakwerken in het vooruitzicht?</h2>
                    <h2 className="contentTitle_2 p-3">Vraag gerust uw vrijblijvende offerte aan!</h2>

                    <Link to="/contact" className="scrollTop">
                        <button className="btn contacteer_btn font-weight-bold mt-2 p-3">Contacteer Steven</button>
                    </Link>
                </div>

            </div>

            <div className="row pt-5 d-flex justify-content-center">


                <div className="col-sm-12 col-lg-6 order-lg-2">
                    <div className="container talentOver">

                        <h2 className="contentTitle text-secondary text-center pt-5">DAKWERKEN LAGAERT STEVEN UIT
                            EVERGEM</h2>
                        <h2 className="contentTitle_2 text-center pt-5">Talent te over</h2>

                        <div className="container contenttextBox p-5 mt-3">
                            <p className="contentText">Het dienstenpakket van Dakwerken Lagaert Steven bestaat
                                uit
                                dakwerken
                                aan
                                hellende en platte
                                daken, zinkwerken, gevelbekleding en Gyprocwerken.</p>

                            <p className="contentText">Steven is uw centrale aanspreekpunt zodat u zeker kunt
                                zijn
                                van
                                duidelijke afspraken. Steven maakt graag de tijd om al uw vragen en opmerkingen te
                                beantwoorden.
                                Dakwerken Lagaert Steven is actief in heel Oost-Vlaanderen.</p>

                            <p className="contentText">Wil u graag een afspraak maken? Dat kan op vrijdag en
                                zaterdag.
                                Steven bespreekt uw wensen en uw budget en kan ook een werfbezoek inplannen indien
                                mogelijk.</p>

                            <p className="contentText">Nadien stelt Steven een gedetailleerde offerte op.
                                Contacteer
                                hem
                                telefonisch, via mail of vul het contactformulier in.</p>

                        </div>

                    </div>

                </div>

                <div className="col-sm-12 mt-sm-3 col-lg-6 order-lg-1">
                    <div className="container afspraak">

                        <div className="row cards mt-4">
                            <div
                                className="col-sm-12 mt-5 col-md-12 col-lg-6 text-center d-flex justify-content-center">

                                <div className="card text-center mt-2">
                                    <i className="fab fa-envira p-4"/>
                                    <h2 className="font-weight-bold">Duidelijke afspraken</h2>
                                    <p>Steven is uw centrale aanspreekpunt tijdens alle werken.</p>
                                </div>

                            </div>

                            <div
                                className="col-sm-12 mt-5 col-md-12 col-lg-6 text-center d-flex justify-content-center">

                                <div className="card text-center mt-2">
                                    <i className="fas fa-tools p-4"/>
                                    <h2 className="font-weight-bold">Veelzijdig vakwerk</h2>
                                    <p>Van dak- tot Gyprocwerken, Steven doet het allemaal.</p>
                                </div>

                            </div>
                        </div>

                        <div className="row cards mt-3 mb-5">
                            <div
                                className="col-sm-12 mt-5 col-md-12 col-lg-6 text-center d-flex justify-content-center">

                                <div className="card text-center mt-2">
                                    <i className="fab fa-envira p-4"/>
                                    <h2 className="font-weight-bold">Duidelijke afspraken</h2>
                                    <p>Steven is uw centrale aanspreekpunt tijdens alle werken.</p>
                                </div>

                            </div>

                            <div
                                className="col-sm-12 mt-5 col-md-12 col-lg-6 text-center d-flex justify-content-center">

                                <div className="card text-center mt-2">
                                    <i className="fas fa-tools p-4"/>
                                    <h2 className="font-weight-bold">Kwaliteitsmaterialen</h2>
                                    <p>U bent steeds zeker van duurzame resultaten</p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default HomeContent;