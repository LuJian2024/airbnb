import { Outlet } from "react-router-dom";
// import Header1 from "../components/Header1/Header1";
import Menu from "../components/Menu"
import Search from "../components/Search/Search"

const SharedLayout = () => {
    return (
        <><div className="body-part">
            <header style={{ borderBottom: '1px solid #eee', marginBottom: '10px' }} >
                <div className="menu-part">
                    <Menu />
                </div>
                <div className="search-part">
                    <Search />
                </div>
            </header>
            <div className="main-part"><main className="main-container">
                <Outlet />
            </main>
                <h2>Ich bin der zukünftige Footer</h2>
                {/* footer */}
            </div>
        </div>
        </>
    );
};

export default SharedLayout;
