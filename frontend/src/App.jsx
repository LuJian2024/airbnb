import AppProvider from "./context/AppProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home/Home";
import Kontakt from "./pages/Kontakt/Kontakt";
import NotFound from "./pages/NotFound/NotFound";
import "./css/App.css";
import Card from "./components/Card/Card";
function App() {
    return (
        <>
            <AppProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<SharedLayout />}>
                            <Route index element={<Home />} />
                            {/* Weitere Routen hier zwischen */}
                            <Route path="kontakt" element={<Kontakt />} />
                            <Route path="card" element={<Card />} />
                            {/* Weitere Routen hier zwischen */}
                            <Route path="*" element={<NotFound />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </AppProvider>
        </>
    );
}

export default App;
