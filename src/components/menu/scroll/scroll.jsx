import { useEffect, useState } from 'react';
import { MENUCATEGORIES } from "../dish";
import style from "./scroll.module.css";

const Scroll = () => {
  // Зберігаємо id активної категорії
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    // 1. Отримуємо всі секції сторінки за їхніми id
    const sections = MENUCATEGORIES.map((cat) => document.getElementById(cat.id)).filter(Boolean);

    if (sections.length === 0) return;

    // 2. Створюємо спостерігач IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Якщо секція перетинає активну зону екрана (ближче до верху)
          if (entry.isIntersecting) {
            const currentId = entry.target.id;
            setActiveId(currentId);

            // Автоматично скролимо меню кнопок до активного елемента
            const activeBtn = document.querySelector(`[data-category-id="${currentId}"]`);
            if (activeBtn) {
              activeBtn.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center', // Центруємо активну кнопку в меню
              });
            }
          }
        });
      },
      {
        root: null,
        // Зміщуємо зону спрацьовування: від верхнього краю на -20% до -60%
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    );

    // Підключаємо спостерігач до кожної секції
    sections.forEach((sec) => observer.observe(sec));

    // Очищення при розмонтуванні компонента
    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  return (
    <div className={style.scrollContainer}>
      <ul id="menu-list" className={style.menuList}>
        {MENUCATEGORIES.map((category) => {
          const isActive = activeId === category.id;

          return (
            <li key={category.id} className={style.spysoc}>
              <a
                href={category.href}
                data-category-id={category.id}
                className={`${style.sylca} ${isActive ? style.active : ''}`}
              >
                {category.text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Scroll;