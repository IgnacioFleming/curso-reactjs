import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container-navbar">
      <img
        src="https://res.cloudinary.com/dah7yxmc5/image/upload/v1680611686/logo_ecommerce_ci16kw.png"
        alt="Logo de la Empresa"
      />
      <ul>
        <li>Todos</li>
        <li>Computación</li>
        <li>Muebles</li>
        <li>Sistemas de Monitoreo</li>
        <li>Equipamiento</li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
