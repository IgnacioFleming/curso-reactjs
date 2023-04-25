import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Nabvar/Navbar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { ThemeProvider } from "@emotion/react";
import theme from "./components/ThemeConfig/ThemeConfig";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route element={<Navbar />}>
              <Route path="/" element={<ItemListContainer />} />
              <Route
                path="/category/:categoryName"
                element={<ItemListContainer />}
              />
              <Route
                path="/itemDetail/:itemId"
                element={<ItemDetailContainer />}
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
