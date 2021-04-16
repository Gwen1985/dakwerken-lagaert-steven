import {useEffect} from "react";
import gsap from "gsap";

import Header from "./Header";
import Footer from "./Footer";

import '../assets/styles/home.css';
import HomeContent from "./HomeContent";


const Home = () => {

    useEffect(() => {

        const tl_header = gsap.timeline({duration: 0.5, ease: "slow"});
        const tl_nav = gsap.timeline({duration: 0.5, ease: "slow"});

        tl_header.fromTo('.logoImg', {opacity: "0%"}, {opacity: "100%"});

        tl_header.fromTo('.hamburger', {opacity: "0%"}, {opacity: "100%"});

        tl_header.fromTo('.title', {opacity: "0%", x: "1em"}, {opacity: "100%", x: "0",});
        tl_header.fromTo('.title_2', {opacity: "0%", x: "-1em"}, {opacity: "100%", x: "0"});
        tl_header.fromTo('.title_3', {opacity: "0%", x: "1em"}, {opacity: "100%", x: "0"});

        tl_nav.fromTo('.first', {opacity: "0%"}, {opacity: "100%"});
        tl_nav.fromTo('.second', {opacity: "0%"}, {opacity: "100%"});
        tl_nav.fromTo('.third', {opacity: "0%"}, {opacity: "100%"});
        tl_nav.fromTo('.fourth', {opacity: "0%"}, {opacity: "100%"});

        tl_header.fromTo('.contactBtn', {opacity: "0%", y: "1em"}, {opacity: "100%", y: "0"});
        tl_header.fromTo('.construct_img', {opacity: "0%", y: "1em"}, {opacity: "100%", y: "0"});
    });


    return (

        <div className="container-fluid">


                <Header/>

                <HomeContent/>

                <Footer/>


        </div>

    )
}


export default Home;