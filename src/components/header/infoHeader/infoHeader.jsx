import HeaderCards from "../cardsHeader/cards";
import Socmereg from "../socMereg/socMereg";
import style from "./infoHeader.module.css";

const InfoHeader = ({ onClose }) => {
  return (
    <div className={style.backdrop} onClick={onClose}>
      <div className={style.sidebar} onClick={(e) => e.stopPropagation()}>
        <button className={style.closeBtn} onClick={onClose} type="button">
          ✕
        </button>
        <div >
          <div className={style.headerTittle}>
            <div className={style.heaederh4}>
              <h3>Контакти</h3>
            </div>
          </div>
          <div className={style.blok}>
          <HeaderCards />
        </div>
        </div>

        <div className={style.socMeseg}>
          <h4> Ми в соц мережах</h4>
            <Socmereg />


        </div>
      </div>
    </div>
  );
};

export default InfoHeader;
