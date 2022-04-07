import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Serie from "./pages/Serie";
import SerieDetails from "./pages/SerieDetails";
import Filme from "./pages/Filme";
import FilmeDetails from "./pages/FilmeDetails";

const MainRoutes = () => {
    return (
        <BrowserRouter>            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tv" element={<Serie />} />
                <Route path="/tv/details/:id" element={<SerieDetails />} />
                <Route path="/movie" element={<Filme />} />
                <Route path="/movie/details/:id" element={<FilmeDetails />} />
                <Route path="/*" element={<h1>Not Found.</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

export default MainRoutes;