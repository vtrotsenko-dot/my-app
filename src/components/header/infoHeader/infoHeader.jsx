import FooterAndHeader from "../../footerAndHeader/footerAndHeader";
import style from "./infoHeader.module.css";

const InfoHeader = ({ onClose }) => {
  return (
    <div className={style.backdrop} onClick={onClose}>
      <div className={style.sidebar} onClick={(e) => e.stopPropagation()}>
        <button className={style.closeBtn} onClick={onClose} type="button">
          ✕
        </button>
        <FooterAndHeader />
      </div>
    </div>
  );
};

export default InfoHeader;


