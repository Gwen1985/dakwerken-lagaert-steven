import {Link} from "react-router-dom";

import '../assets/styles/homeContent.css';
import risingRoof from '../assets/images/Raising_roof2.jpg';


const HomeContent = () => {

    return (
        <div className="homeContent">

            <div className="container">
                <div className="row my-5">

                    <div className="col-sm-12 col-xl-7">
                        <div className="container p-2">

                            <h2 className="contentTitle text-center text-secondary">DAKWERKEN LAGAERT STEVEN UIT
                                EVERGEM</h2>
                            <h2 className="contentTitle_2 py-2">Uw dak tot in de puntjes afgewerkt</h2>

                            <p className="contentText mt-2">Is uw hellend of plat dak aan vervanging toe?
                                <br/>
                                Of
                                wilt u een
                                volledig
                                nieuw dak laten
                                plaatsen? <br/>
                                Dakwerken Lagaert Steven klaart de klus voor u!</p>

                            <p className="contentText">Zelfwerkend zaakvoerder Steven Lagaert heeft meer
                                dan
                                twaalf jaar
                                ervaring en slaat voor zijn
                                projecten de handen in elkaar met drie andere zelfstandigen.</p>

                            <p className="contentText">Steven
                                garandeert u
                                steeds
                                een
                                goede
                                prijs-kwaliteit en duurzame eindresultaten.</p>

                        </div>
                    </div>

                    <div className="col-sm-12 col-xl-5 d-flex justify-content-center">
                        <div className="container mt-xl-5">
                            <img src={risingRoof} alt="risingRoof" className="contentImg risingRoof" width="100%"/>
                        </div>
                    </div>

                </div>
            </div>

            <div className="row homeMidImg p-5">
                <div className="col-12 p-5 text-white text-center">
                    <h2 className="contentTitle_3">Dakwerken in het vooruitzicht?</h2>
                    <h2 className="contentTitle_2 p-3">Vraag gerust uw vrijblijvende offerte aan!</h2>
                    <Link to="/contact" className="scrollTop">
                        <button className="btn contacteer_btn font-weight-bold">Contacteer Steven</button>
                    </Link>
                </div>
            </div>

            <div className="container">
                <div className="row d-flex justify-content-center my-5">

                    <div className="col-sm-12 col-xl-6 order-xl-2">
                        <div className="container p-2">

                            <h2 className="contentTitle text-secondary text-center">DAKWERKEN LAGAERT STEVEN UIT
                                EVERGEM</h2>
                            <h2 className="contentTitle_2 py-2">Talent te over</h2>

                            <p className="contentText mt-2">Het dienstenpakket van Dakwerken Lagaert Steven bestaat
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

                    <div className="col-sm-12 col-xl-6 order-xl-1">
                        <div className="container p-2">
                            <div className="row mt-xl-3">

                                <div className="col-sm-12 col-md-12 col-lg-6 p-3 text-center d-flex justify-content-center">
                                    <div className="card text-center mt-2">
                                        <i className="fab fa-envira p-4"/>
                                        <h2 className="font-weight-bold">Duidelijke afspraken</h2>
                                        <p>Steven is uw centrale aanspreekpunt tijdens alle werken.</p>
                                    </div>
                                </div>

                                <div className="col-sm-12 col-md-12 col-lg-6 p-3 text-center d-flex justify-content-center">
                                    <div className="card text-center mt-2">
                                        <i className="fas fa-tools p-4"/>
                                        <h2 className="font-weight-bold">Veelzijdig vakwerk</h2>
                                        <p>Van dak- tot Gyprocwerken, Steven doet het allemaal.</p>
                                    </div>
                                </div>

                            </div>

                            <div className="row mt-xl-5">

                                <div className="col-sm-12col-md-12 col-lg-6 p-3 text-center d-flex justify-content-center">
                                    <div className="card text-center mt-2">
                                        <i className="fab fa-envira p-4"/>
                                        <h2 className="font-weight-bold">Duidelijke afspraken</h2>
                                        <p>Steven is uw centrale aanspreekpunt tijdens alle werken.</p>
                                    </div>
                                </div>

                                <div className="col-sm-12 col-md-12 col-lg-6 p-3 text-center d-flex justify-content-center">
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

        </div>
    )
}

export default HomeContent;