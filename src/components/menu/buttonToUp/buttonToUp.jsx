"use client";

import { useState, useEffect } from "react";
import style from "./buttonToUp.module.css";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (totalScrollableHeight > 0) {
        const scrollPercentage = (window.scrollY / totalScrollableHeight) * 100;
        setIsVisible(scrollPercentage >= 35);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Повернутися вгору"
      className={`${style.toUp} ${isVisible ? style.show : ""}`}
    >
      ↑
    </button>
  );
}