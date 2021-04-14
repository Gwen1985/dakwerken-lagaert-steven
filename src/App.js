import {BrowserRouter} from "react-router-dom";
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


const  App = () => {

    return (

        <div className="App">

            <BrowserRouter>
                <Switch>

                    <Route path="/" exact component={Home}/>

                    <Route path="/hellende-daken" exact component={HellendeDaken}/>

                    <Route path="/platte-daken" exact component={PlatteDaken}/>

                    <Route path="/zink-werken" exact component={ZinkWerken}/>

                    <Route path="/gevel-bekleding" exact component={GevelBekleding}/>

                    <Route path="/gyproc-werken" exact component={GyprocWerken}/>

                    <Route path="/realisaties" exact component={Realisaties}/>

                    <Route path="/contact" exact component={Contact}/>

                </Switch>
            </BrowserRouter>

        </div>

    );
}


export default App;
