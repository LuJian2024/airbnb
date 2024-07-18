import AppProvider from "./context/AppProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home/Home";
import Kontakt from "./pages/Kontakt/Kontakt";
import NotFound from "./pages/NotFound/NotFound";
import "./css/App.css";

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
