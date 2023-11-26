import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Main from "./components/Main/Home";
import PriceList from "./components/Pricelist/Pricelist";
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/cenik" element={<PriceList />} />
          <Route path="/galerie" element={<Gallery />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
