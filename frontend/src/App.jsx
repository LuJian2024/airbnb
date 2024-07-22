import AppProvider from "./context/AppProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home/Home";
import Kontakt from "./pages/Kontakt/Kontakt";
import NotFound from "./pages/NotFound/NotFound";
import "./css/App.css";
// import Menu from "./components/Menu";

import Catalog from "./pages/Catalog/Catalog";
import DetailInfos from "./pages/DetailInfos/DetailInfos";

function App() {
  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            {/* <Route path="header1" element={<Header1 />} /> */}
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Home />} />
              {/* Weitere Routen hier zwischen */}
              <Route path="kontakt" element={<Kontakt />} />
              <Route path="catalog/:tabID/:page" element={<Catalog />} />
              <Route path="detail" element={<DetailInfos />} />
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
