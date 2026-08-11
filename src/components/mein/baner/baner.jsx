import style from "./baner.module.css";
const Baner = () => {
  return (
    <div>
      <div>
        <div className={style.baner}></div>
        <img src="/soloha_intro_bg.webp" alt="" className={style.photo} />
        <div className={style.baner}></div>
      </div>
      <div className={style.meinMiddle}>
        <h3 className={style.classh3}>
          Ласкаво просимо до нашого кафе-бару — місце, де смачна кухня
          поєднується із атмосферою. Насолоджуйтеся улюбленими стравами та
          напоями на просторій терасі з чудовим видом на центр міста.
        </h3>

        <div>
          <a href="/" className={style.mainBnt}>
            <button className={style.mainButton}>МЕНЮ</button>
          </a>
          <a href="/" className={style.mainBnt}>
            <button className={style.mainButton}>Банкети та кейтеринг</button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Baner;
