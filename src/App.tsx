import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Main from "./components/Home/Home";
import PriceList from "./components/Pricelist/Pricelist";
import Portfolio from "./components/Portfolio/Portfolio";
import Gallery from "./components/Portfolio/Gallery";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/cenik" element={<PriceList />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<Gallery />} />
          <Route path="/kontakt" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
