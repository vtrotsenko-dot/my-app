import FooterAndHeader from "../footerAndHeader/footerAndHeader";
import Header from "../header/header";
import BnkKeyText from "./bnkkeytext/bnkKeyText";
import Banerok from "../baner/baner";
import PodText from "./podText/podText";


const BanketAndKeytering = () => {
  return<div>
    <Header />
    <Banerok />
    <BnkKeyText />
    <PodText />
    <FooterAndHeader type={false}/>
  </div>;

};

export default BanketAndKeytering;
