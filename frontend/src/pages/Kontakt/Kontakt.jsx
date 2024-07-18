import { Link } from "react-router-dom";

const Kontakt = () => {
    return (
        <>
            <h1>Kontaktieren Sie uns</h1>
            <form>
                <div>
                    <label htmlFor="name">Vollständiger Name</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div>
                    <label htmlFor="message">Ihre Nachricht</label>
                    <textarea name="message" id="message"></textarea>
                </div>
                <input type="submit" value="Nachricht Abschicken" />
            </form>
            <Link to={"/"}>Gehen Sie zurück auf die Startseite</Link>
        </>
    );
};

export default Kontakt;
