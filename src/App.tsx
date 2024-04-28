import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Main from "./pages/Home/Home";
import PriceList from "./pages/Pricelist/Pricelist";
import Portfolio from "./pages/Portfolio/Portfolio";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";

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
