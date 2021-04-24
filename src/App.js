import {BrowserRouter as Router} from "react-router-dom";
import {Route, Switch} from "react-router";
import {Fragment} from "react";

import {useEffect} from "react";
import gsap from "gsap";

import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";

import ScrollToTop from "./controllers/ScrollToTop";

import Home from "./views/Home";
import HellendeDaken from "./views/HellendeDaken";
import PlatteDaken from "./views/PlatteDaken";
import ZinkWerken from "./views/ZinkWerken";
import GevelBekleding from "./views/GevelBekleding";
import GyprocWerken from "./views/GyprocWerken";
import Realisaties from "./views/Realisaties";
import Contact from "./views/Contact";


const App = () => {


    useEffect(() => {


        const tl = gsap.timeline({duration: 1});


        tl.fromTo('.logoImg',

            {
                scale: 1.5,
                opacity: "0%"
            },

            {
                scale: 0.1,
                opacity: "100%",
                rotate: -360
            });

        tl.to('.logoImg',

            {
                scale: 1,
                ease: "bounce"
            });


        tl.fromTo(['.hamburger', '.navbar'],

            {
                opacity: "0%"
            },

            {
                opacity: "100%"
            });


        tl.fromTo('.pnglogo',

            {
                scale: 0
            },

            {
                scale: 1,
                ease: "slow"
            });


        tl.fromTo(['.title', '.title_3'],

            {
                opacity: "0%",
                x: "1em"
            },

            {
                opacity: "100%",
                x: "0"
            });


        tl.fromTo(['.title_2', '.contactBtn'],

            {
                opacity: "0%",
                y: "1em"
            },

            {
                opacity: "100%",
                y: "0",
                ease: "bounce"
            });

    });


    return (

        <div className="App">

            <Router>
                <Fragment>
                    <ScrollToTop>
                        <Switch>

                            <Route path="/" exact component={Home}/>

                            <Route path="/hellende-daken" exact component={HellendeDaken}/>

                            <Route path="/platte-daken" exact component={PlatteDaken}/>

                            <Route path="/zink-werken" exact component={ZinkWerken}/>

                            <Route path="/gevel-bekleding" exact component={GevelBekleding}/>

                            <Route path="/gyproc-werken" exact component={GyprocWerken}/>

                            <Route path="/realisaties" exact component={Realisaties}/>

                            <Route path="/contact" exact component={Contact}/>

                            <Route path="/privacy-beleid" exact component={Contact}/>

                            <Route path="/coockie-beleid" exact component={Contact}/>

                            <Route path="/algemene-voorwaarden" exact component={Contact}/>

                        </Switch>
                    </ScrollToTop>
                </Fragment>
            </Router>

        </div>

    );
}


export default App;
