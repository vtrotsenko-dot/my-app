
import Header from "../header/header"
import Baner from "./baner/baner"
import SectionPhoto from "./sectitonPhoto/sectionPhoto"
import FooterAndHeader from "../footerAndHeader/footerAndHeader"

const Main = () => {
 return(
      <div>
        <Header />
        <Baner />
        <SectionPhoto />
        <FooterAndHeader type={false}/>
      </div>
 )
}
export default Main
