import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Ej1Productos from "./pages/Ej1Productos";
import Ej2Formulario from "./pages/Ej2Formulario";
import Ej3APK from "./pages/Ej3APK";

export default function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">Mi Proyecto</Link>
          <ul className="navbar-nav ms-3">
            <li className="nav-item"><Link className="nav-link" to="/ej1">Ejercicio 1</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/ej2">Ejercicio 2</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/ej3">Ejercicio 3</Link></li>
          </ul>
        </div>
      </nav>
      <div className="container py-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ej1" element={<Ej1Productos />} />
          <Route path="/ej2" element={<Ej2Formulario />} />
          <Route path="/ej3" element={<Ej3APK />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
