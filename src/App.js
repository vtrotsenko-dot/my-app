import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/main/main";
import Menu from "./components/menu/menu";
import BanketAndKeytering from "./components/banketAndKeytering/banketAndKeytering";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Banket" element={<BanketAndKeytering />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
