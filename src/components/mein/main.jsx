import { BrowserRouter } from "react-router-dom"
import Header from "../header/header"
import Baner from "./baner/baner"
import SectionPhoto from "./sectitonPhoto/sectionPhoto"

const Main = () => {
 return(
    <BrowserRouter>
      <div>
        <Header />
        <Baner />
        <SectionPhoto />
      </div>
    </BrowserRouter>
 )
}
export default Main
