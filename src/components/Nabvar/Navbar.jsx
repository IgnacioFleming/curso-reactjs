import { AppBar, Hidden, Toolbar } from "@mui/material";
import { CategoriesDesktop } from "./CategoriesDesktop";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <img
          src="https://res.cloudinary.com/dah7yxmc5/image/upload/v1680611686/logo_ecommerce_ci16kw.png"
          alt="Logo de la empresa"
        />
        <Hidden mdDown>
          <CategoriesDesktop />
        </Hidden>
        <CartWidget />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
