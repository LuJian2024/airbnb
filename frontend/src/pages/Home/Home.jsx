import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <h1>Ich bin die Startseite</h1>

            <Link to={"/kontakt"}>Kontaktieren Sie uns!</Link>
        </>
    );
};

export default Home;
