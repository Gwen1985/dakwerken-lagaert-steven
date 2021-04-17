import {BrowserRouter as Router} from "react-router-dom";
import {Route, Switch} from "react-router";

import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";

import Home from "./views/Home";
import HellendeDaken from "./views/HellendeDaken";
import PlatteDaken from "./views/PlatteDaken";
import ZinkWerken from "./views/ZinkWerken";
import GevelBekleding from "./views/GevelBekleding";
import GyprocWerken from "./views/GyprocWerken";
import Realisaties from "./views/Realisaties";
import Contact from "./views/Contact";
import ScrollToTop from "./controllers/ScrollToTop";
import {Fragment} from "react";


const App = () => {

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
