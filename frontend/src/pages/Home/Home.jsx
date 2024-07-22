
// import { NavLink } from "react-router-dom";
import MainInfoCard from "../../components/MainInfoCard/MainInfoCard";
import Tabs from "../../components/Tabs/Tabs";
// import Header1 from "../../components/Header1/Header1";
// import Tabs from "../../components/Tabs/tabsWithID/TabsWithID";


// import Search from "../../components/Search/Search";

const Home = () => {



    return (
        <>
            <div className="App">

                {/* <h1>Ich bin die Startseite</h1> */}
                {/* <NavLink to={"/card"}>nach karte bild!</NavLink><br />
                <NavLink to={"/kontakt"}>Kontaktieren Sie uns! hallo</NavLink> */}

                <Tabs />
                <MainInfoCard />


            </div>



        </>
    );
};

export default Home;
