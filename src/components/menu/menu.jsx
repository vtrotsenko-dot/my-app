import Banerok from "../baner/baner";
import FooterAndHeader from "../footerAndHeader/footerAndHeader";
import Header from "../header/header";
import Category from "./category/category";
import Scroll from "./scroll/scroll";



const Menu = () => {
  return (
    <div>
      <Header />
      <Banerok type = "menu"/>
      <Scroll />
      <Category />
      <FooterAndHeader type={false} />
    </div>
  );
};

export default Menu;
