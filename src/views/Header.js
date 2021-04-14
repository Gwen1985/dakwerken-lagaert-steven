import {Link} from "react-router-dom";

import {useEffect} from "react";
import gsap from "gsap";

import logo from '../assets/Logo.png';
import Nav from "./Nav";


import '../header.css';
import firstPic from "../assets/99094437_280153090042466_1861327496239120384_n.jpg";


const Header = () => {


    useEffect(() => {
        const tl = gsap.timeline({duration: 1, delay: 0.1});

        tl.fromTo('.logoImg', {opacity: "0%", y: "-1em"}, {opacity: "100%", y: "0", ease: "slow"});
        tl.fromTo('.title', {opacity: "0%", y: "-1em"}, {opacity: "100%", y: "0", ease: "slow"});
        tl.fromTo('.title_2', {opacity: "0%", y: "1em"}, {opacity: "100%", y: "0", ease: "slow"});
        tl.fromTo('.title_3', {opacity: "0%", y: "1em"}, {opacity: "100%", y: "0", ease: "slow"});
        tl.fromTo('.btn', {opacity: "0%", y: "-1em"}, {opacity: "100%", y: "0", ease: "slow"});
        tl.fromTo('.img', {opacity: "0%"}, {opacity: "100%", ease: "slow", duration: 3});


    });

    return (

        <div className="row p-4 bg-dark">

            <div className="col-12 col-sm-12 p-3">
                <div className="container">
                    <Link to="/">
                        <img src={logo} alt="logo" width="100%" className="logoImg"/>
                    </Link>
                </div>
            </div>


            <div className="col-12 col-sm-12 p-3 d-flex justify-content-center">
                <Nav/>
            </div>


            <div className="col-12 col-sm-12 text-center">
                <div className="titleWrapper">

                    <h1 className="title text-white">Dakwerken Lagaert Steven</h1>

                    <p className="title_2">UIT EVERGEM</p>

                    <p className="title_3 text-white">Dakwerken volgens het boekje.</p>

                    <button className="btn mt-2">Contact</button>

                </div>
            </div>

            <div className="col-12 col-sm-12 p-4">
                <div className="container">
                    <img src={firstPic} alt="eeee" width="100%" className="img rounded-lg shadow" loading="lazy"/>
                </div>
            </div>

        </div>

    )
}


export default Header;