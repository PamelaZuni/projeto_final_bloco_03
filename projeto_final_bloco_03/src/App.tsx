import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/Home";
import ListarCategorias from "./components/categoria/listacategorias";
import FormCategoria from "./components/categoria/formcategorias";
import DeletarCategoria from "./components/categoria/deletecategorias";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[90vh] bg-gray-200">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListarCategorias />} />
            <Route path="/cadastrarcategoria" element={<FormCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
