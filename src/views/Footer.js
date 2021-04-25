import {Link} from "react-router-dom";

import logo from "../assets/images/Logo.png";

import '../assets/styles/footer.css';


const Footer = () => {

    return (

        <div className="row footer text-center text-white font-weight-bold p-5">

            <div className="col-sm-12 col-lg-3 mt-4">
                <Link to="/">
                    <img src={logo} alt="logo" width="100%"/>
                </Link>

                <div className="container pt-3">
                    <p className="mt-3">Dakwerken Lagaert uit Evergem is uw dakwerker voor hellende & platte
                        daken
                        en helpt u met
                        zink- en Gyprocwerken & gevelbekleding.</p>

                    <a href="https://www.facebook.com/stevenlagaert" target="_blank" rel="noreferrer">
                        <i className="fab fa-facebook text-warning mr-5"/>
                    </a>

                    <a href="https://www.instagram.com/dak_en_renovatiewerken_lagaert" target="_blank" rel="noreferrer">
                        <i className="fab fa-instagram text-warning"/>
                    </a>
                </div>

            </div>

            <div className="col-sm-12 col-lg-3 mt-4">
                <h2 className="text-warning p-2">Onze gegevens</h2>

                <a href="https://goo.gl/maps/UhEHFrsD3Eh1ZoR89" target="_blank" rel="noreferrer">
                    <p className="text-white">
                        <i className="fas fa-map-marker-alt text-warning mr-2 mt-2"/>
                        Durmestraat 28, 9940 Evergem
                    </p>
                </a>

                <a href="tel: 0032497219273">
                    <p className="text-white">
                        <i className="fas fa-mobile-alt text-warning mr-2"/>
                        0497/21.92.73
                    </p>
                </a>

                <a href="mailto: info@dakwerken-lagaertsteven.be">
                    <p className="text-white">
                        <i className="fas fa-envelope-open text-warning mr-2"/>
                        info@dakwerken-lagaertsteven.be
                    </p>
                </a>


                <p><i className="fas fa-building text-warning mr-2"/>BE 0732.478.078</p>

            </div>

            <div className="col-sm-12 col-lg-3 mt-4">
                <h2 className="text-warning">Onze diensten</h2>

                <p><Link to="/hellende-daken" className="text-white"><i
                    className="fas fa-arrow-right text-warning mr-2"/>Hellende
                    daken</Link></p>
                <p><Link to="/platte-daken" className="text-white"><i
                    className="fas fa-arrow-right text-warning mr-2"/>Platte
                    daken</Link></p>
                <p><Link to="/zink-werken" className="text-white"><i
                    className="fas fa-arrow-right text-warning mr-2"/>Zinkwerken</Link></p>
                <p><Link to="/gevel-bekleding" className="text-white"><i
                    className="fas fa-arrow-right text-warning mr-2"/>Gevelbekleding</Link>
                </p>
                <p><Link to="gyproc-werken" className="text-white"><i
                    className="fas fa-arrow-right text-warning mr-2"/>Gyprocwerken</Link></p>

            </div>

            <div className="col-sm-12 col-lg-3 mt-4">
                <h2 className="text-warning">PRIVACY</h2>

                <p><Link to="/privacy-beleid" className="text-white"><i
                    className="fas fa-arrow-right text-warning mr-2"/>Privacybeleid</Link></p>
                <p><Link to="/coockie-beleid" className="text-white"><i
                    className="fas fa-arrow-right text-warning mr-2"/>Coockiebeleid</Link></p>
                <p><Link to="/algemene-voorwaarden" className="text-white"><i
                    className="fas fa-arrow-right text-warning mr-2"/>Algemene voorwaarden</Link></p>

            </div>


            <div className="col-12">
                <hr className="text-center bg-light"/>
                <p className="footerText">Copyright © 2021 | Dakwerken Lagaert
                    Alle rechten voorbehouden.</p>
            </div>

        </div>
    )
}


export default Footer;