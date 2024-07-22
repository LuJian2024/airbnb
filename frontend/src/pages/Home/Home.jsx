import { Link } from "react-router-dom";
import Search from "../../components/Search/Search";

const Home = () => {
    return (
        <>
            <h1>Ich bin die Startseite</h1>

            <Link to={"/kontakt"}>Kontaktieren Sie uns!</Link>
            <Search />
        </>
    );
};

export default Home;
