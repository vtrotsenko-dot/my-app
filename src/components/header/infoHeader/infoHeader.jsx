import FooterAndHeader from "../../footerAndHeader/footerAndHeader";
import style from "./infoHeader.module.css";

const InfoHeader = ({ isOpen, onClose }) => {
  return (
    <div 
      className={`${style.backdrop} ${isOpen ? style.backdropOpen : ''}`} 
      onClick={onClose}
    >
      <div 
        className={`${style.sidebar} ${isOpen ? style.sidebarOpen : ''}`} 
        onClick={(e) => e.stopPropagation()}
      >
        <button className={style.closeBtn} onClick={onClose} type="button">
          ✕
        </button>
        <FooterAndHeader />
      </div>
    </div>
  );
};

export default InfoHeader;


