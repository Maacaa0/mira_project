import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Main from "./components/Main/Home";
import PriceList from "./components/Pricelist/Pricelist";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/cenik" element={<PriceList />} />
          <Route path="/portfolio" element={<Portfolio />}>
            <Route path="/portfolio/:gallery"></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
