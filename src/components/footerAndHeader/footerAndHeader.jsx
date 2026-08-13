import HeaderCards from "../header/cardsHeader/cards";
import style from "./footerAndHeader.module.css";
import Socmereg from "../header/socMereg/socMereg";


const FooterAndHeader = ({ type = "header" }) => {
  const isHeader = type === "header";
  return(
    <div>
                  {!isHeader &&(<hr />)}
            <div >
          <div className={style.headerTittle}>
            {isHeader && (
            <div className={style.heaederh4}>
              <h3>Контакти</h3>
            </div>
            )}
          </div>
          <div className={style.blok}>
          <HeaderCards type={isHeader}/>
        </div>
        </div>
            {!isHeader &&(<hr />)}
            <div className={style.wrapper}>
        <div className={style.socMeseg}>
          <h4> Ми в соц мережах</h4>
            <Socmereg />

         {!isHeader && (
          <div> 
            <div>
              <h3 className={style.Title}> Ми на карті</h3>
            </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9635.931513139121!2d33.791082!3d50.564262!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4129f138f3d52cfd%3A0x868b952040c04c05!2z0JrQsNGE0LUt0LHQsNGAICLQodC-0LvQvtGF0LAi!5e1!3m2!1suk!2sua!4v1782369618802!5m2!1suk!2sua"
          width="100%"
          height="280"
          style={{ border: 0, borderRadius: "8px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Google Map"
        ></iframe>
          </div>)}
        </div>
        </div>
        </div>
  )
}

export default FooterAndHeader