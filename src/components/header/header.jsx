import { NavLink } from "react-router-dom"; // Змінили Link на NavLink
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
        
        <NavLink 
          to="/" 
          end 
          className={({ isActive }) => 
            isActive 
              ? style.headClass 
              : `${style.headClass} ${style.headClassOther || ''}` 
          }
        >
          {({ isActive }) => (
            <img 
              src={isActive ? "/favicon.svg" : "/headerBack.svg"} 
              alt="Логотип" 
              className={
                isActive 
                  ? style.emblem 
                  : `${style.emblem} ${style.emblemOther || ''}` 
              } 
            />
          )}
        </NavLink>

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