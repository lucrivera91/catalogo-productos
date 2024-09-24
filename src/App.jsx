import { Navigate, Route, Routes } from "react-router-dom";
import { ProductosProvider } from "./components/contexts/ProductosProvider";
import { CarritoProvider } from "./components/contexts/CarritoProvider";
import { Home } from "./components/pages/Home";
import { Electronics } from "./components/pages/Electronics";
import { Jewelery } from "./components/pages/Jewelery";
import { MenCloth } from "./components/pages/MenCloth";
import { WomenCloth } from "./components/pages/WomenCloth";
import { Carrito } from "./components/pages/Carrito";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <ProductosProvider>
      <CarritoProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo/electronica" element={<Electronics />} />
          <Route path="/catalogo/joyeria" element={<Jewelery />} />
          <Route path="/catalogo/ropa-hombre" element={<MenCloth />} />
          <Route path="/catalogo/ropa-mujer" element={<WomenCloth />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </CarritoProvider>
    </ProductosProvider>
  );
}

export default App;
