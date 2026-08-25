import FooterAndHeader from "../footerAndHeader/footerAndHeader";
import Header from "../header/header";
import Category from "./category/category";



const Menu = () => {
  return (
    <div>
      <Header />
      
      <Category />
      <FooterAndHeader type={false} />
    </div>
  );
};

export default Menu;
