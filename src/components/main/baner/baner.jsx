import style from "./baner.module.css";
import MainButton from "../meinButton/mainButton";
const Baner = () => {
  return (
    <div className={style.fistScreen}>
      <div>
        <div className={style.baner}></div>
        <div className={style.conteinerPhoto}>
          <img src="/soloha_intro_bg.webp" alt="" className={style.photo} />

          <h3 className={style.textBaner}>
            Ласкаво просимо до нашого кафе-бару — місце, де смачна кухня
            поєднується із атмосферою. Насолоджуйтеся улюбленими стравами та
            напоями на просторій терасі з чудовим видом на центр міста.
          </h3>
        </div>
        <div className={style.baner}></div>
      </div>
      <div className={style.meinMiddle}>
        <h3 className={style.classh3}>
          Ласкаво просимо до нашого кафе-бару — місце, де смачна кухня
          поєднується із атмосферою. Насолоджуйтеся улюбленими стравами та
          напоями на просторій терасі з чудовим видом на центр міста.
        </h3>

        <MainButton />
      </div>
    </div>
  );
};
export default Baner;
