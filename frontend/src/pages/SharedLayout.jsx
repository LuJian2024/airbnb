import { Outlet } from "react-router-dom";

const SharedLayout = () => {
    return (
        <>
            {/* nav/header */}
            <h2>Ich bin die zukünftige Navbar</h2>
            <main className="main-container">
                <Outlet />
            </main>
            <h2>Ich bin der zukünftige Footer</h2>
            {/* footer */}
        </>
    );
};

export default SharedLayout;
