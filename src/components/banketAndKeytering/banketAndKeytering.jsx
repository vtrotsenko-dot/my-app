import BanerbnkKey from "../banerBnkKey/banerbnkKey";
import FooterAndHeader from "../footerAndHeader/footerAndHeader";
import Header from "../header/header";


const BanketAndKeytering = () => {
  return<div>
    <Header />
    <BanerbnkKey />
    <FooterAndHeader type={false}/>
  </div>;

};

export default BanketAndKeytering;
