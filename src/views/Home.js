import {useEffect} from "react";
import gsap from "gsap";

import Header from "./Header";

import '../home.css';
import {Link} from "react-router-dom";


const Home = () => {

    useEffect(() => {
        const tl = gsap.timeline({scrollTrigger: ".contentTitle", duration: 1, delay: 2});

        tl.fromTo('.contentTitle',{ opacity: "0%"}, {opacity: "100%"})


    });

    return (
        <div className="container-fluid">

            <Header/>




            <div className="row">
                <div className="col-12 col-sm-12 p-2 bg-white text-center">
                    <div className="container">
                    <p className="contentTitle text-secondary pt-5">DAKWERKEN LAGAERT STEVEN UIT EVERGEM</p>
                    <p className="contentTitle_2">Uw dak tot in de puntjes afgewerkt</p>

                    <p>Is uw hellende of plat dak aan vervanging toe? Of wilt u een volledig nieuw dak laten plaatsen?
                        Dakwerken Lagaert Steven klaart de klus voor u!</p>

                    <p>Zelfwerkend zaakvoerder Steven Lagaert heeft meer dan twaalf jaar ervaring en slaat voor zijn
                        projecten de handen in elkaar met drie andere zelfstandigen. Steven garandeert u steeds een goede
                        prijs-kwaliteit en duurzame eindresultaten.</p>

                        <Link to="/contact" >offerte aanvragen <i className="fas fa-arrow-right"/></Link>
                    </div>
                </div>
            </div>



        </div>

    )
}


export default Home;