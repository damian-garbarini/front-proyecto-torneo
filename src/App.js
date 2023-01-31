import { Routes, Route } from "react-router-dom";
import Articulos from "./componentes/Articulos";
import Formulario from "./componentes/Formulario";
import Main from "./componentes/Recomendado";
import Navegacion from "./componentes/Navegacion";
import Footer from "./componentes/Footer";
import Imagenes from "./componentes/Home";

function App() {
  return (
    <>
      <Navegacion />
        <Routes>
          <Route path="/recomendado" element={<Main />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/articulos" element={<Articulos />} />
          <Route path="/home" element={<Imagenes />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;

