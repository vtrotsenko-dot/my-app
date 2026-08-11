import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/header";
import Baner from "./components/mein/baner/baner";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Baner />
      </div>
    </BrowserRouter>
  );
}

export default App;
