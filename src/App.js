import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Nabvar/Navbar.jsx";
import ItemListConteiner from "./components/ItemListConteiner/ItemListConteiner";
import { ThemeProvider } from "@emotion/react";
import theme from "./components/ThemeConfig/ThemeConfig";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        {/* <ItemListConteiner /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
