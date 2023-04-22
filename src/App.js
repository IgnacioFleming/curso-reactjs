import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Nabvar/Navbar.jsx";
import ItemListConteiner from "./components/ItemListConteiner/ItemListConteiner";
import { ThemeProvider } from "@emotion/react";
import theme from "./components/ThemeConfig/ThemeConfig";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route element={<Navbar />}>
              <Route path="/" element={<ItemListConteiner />} />
              <Route
                path="/category/:categoryName"
                element={<ItemListConteiner />}
              />
            </Route>
            <Route
              path="*"
              element={
                <h1
                  style={{ textAlign: "center", fontSize: 50, paddingTop: 30 }}
                >
                  La Pagina buscada no existe
                </h1>
              }
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
