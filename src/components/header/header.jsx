import { Link } from "react-router-dom";
import style from "./header.module.css";
import { useState } from "react";
import InfoHeader from "./infoHeader/infoHeader";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className={style.header}>
      <div className={style.headerContainer}>
        <Link to="/" className={style.headClass}>
          <img src="/favicon.svg" alt="Назад" className={style.emblem} />
        </Link>

        <button
          className={style.menuBtn}
          id="openMenu"
          type="button"
          onClick={toggleMenu}
        >
          <img src="/burgerbutton.svg" alt="Меню" />
        </button>

        {/* Висувна панель підключається як окремий компонент */}
        <InfoHeader isOpen={isOpen} onClose={closeMenu} />
      </div>
    </div>
  );
};

export default Header;
