// import degli elementi della libreria di gestione delle rotte
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import DefaultLayout from "./layouts/DefaultLayout";

// Pages
import HomePage from "./pages/HomePage";
import ChiSiamo from "./pages/ChiSiamo";
import ListaPost from "./pages/ListaPost";
import MainPiatti from "./pages/MainPiatti";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />} >
          <Route path="/" element={<HomePage />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/lista" element={<ListaPost />} />
          <Route path="/piatti" element={<MainPiatti />} />
        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App
