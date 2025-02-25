// import degli elementi della libreria di gestione delle rotte
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Layout
import DefaultLayout from "./layouts/DefaultLayout";

// Pages
import HomePage from "./pages/HomePage";
import ChiSiamo from "./pages/ChiSiamo";
import ListaPost from "./pages/ListaPost";
import ListaPiatti from "./pages/PaginaListaPiatti";
import DetaglioPiattoSingolo from "./pages/PaginaDetaglioSingolo";
import CreazioneNuoviPiatti from "./pages/PaginaCreazionePiatti";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />} >
          <Route index element={<HomePage />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/lista" element={<ListaPost />} />
          <Route path="/Ristorante" element={<Navigate to="/piatti" />} />
          <Route path="/piatti">
            <Route index element={<ListaPiatti />} />
            <Route path="create" element={<CreazioneNuoviPiatti />} />
            <Route path=":id" element={<DetaglioPiattoSingolo />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App
