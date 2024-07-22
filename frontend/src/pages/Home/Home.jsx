import { Link } from "react-router-dom";
import MainInfoCard from "../../components/MainInfoCard/MainInfoCard";

const Home = () => {
  return (
    <>
      <h1>Ich bin die Startseite</h1>

      <Link to={"/kontakt"}>Kontaktieren Sie uns!</Link>
      <MainInfoCard />
    </>
  );
};

export default Home;
