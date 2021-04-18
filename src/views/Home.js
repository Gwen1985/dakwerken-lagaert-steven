import Header from "./Header";
import Footer from "./Footer";

import '../assets/styles/home.css';
import HomeContent from "./HomeContent";


const Home = () => {

    return (

        <div className="container-fluid">

                <Header/>

                <HomeContent/>

                <Footer/>

        </div>

    )
}


export default Home;