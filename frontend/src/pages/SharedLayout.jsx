import { Outlet } from "react-router-dom";
import Header1 from "../components/Header1/Header1";

const SharedLayout = () => {
    return (
        <>
            {/* nav/header */}
            {/* <h2>Ich bin die zukünftige Navbar</h2> */}
            <Header1 />
            <main className="main-container">
                <Outlet />
            </main>
            <h2>Ich bin der zukünftige Footer</h2>
            {/* footer */}
        </>
    );
};

export default SharedLayout;
