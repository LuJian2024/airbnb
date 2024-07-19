
import { NavLink } from "react-router-dom";
import Tabs from "../../components/Tabs/tabs";

const Home = () => {



    return (
        <>
            <div className="App">

                <h1>Ich bin die Startseite</h1>

                <NavLink to={"/kontakt"}>Kontaktieren Sie uns! hallo</NavLink>

                <Tabs />


            </div>

        </>
    );
};

export default Home;
