import {useEffect} from "react";
import {TweenMax} from "gsap";

import logo from '../assets/Logo.png';
import Nav from "./Nav";


const Header = () => {

    useEffect(() => {


        TweenMax.fromTo(
            '.logoImg',

            {
                opacity: '0%'
            },

            {
                opacity: '100%',
                duration: 5,
                ease: 'bounce',
                delay: 0.4,
            });

    });
    return (


        <header className="bg-dark">
            <div className="row p-5">
                <div className="col-sm-12 d-flex justify-content-center">
                    <Nav/>
                </div>
            </div>

            <div className="row p-4">
                <div className="col-12 d-flex justify-content-center">
                    <img src={logo} alt="logo" width="100%" className="logoImg"/>
                </div>
            </div>

        </header>

    )
}

export default Header;