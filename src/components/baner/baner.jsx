import style from "./baner.module.css";
const Banerok = () => {
  return (
    <div className={style.introEmblemme}>
      <div className={style.photoBackground}></div>
      <h4 className={style.zagolovok}>Банкети та Кейтеринг</h4>
      <h5 className={style.podzagolovok}>
        Святкуйте важливі події разом із «Солохою»
      </h5>
      <div className={style.photoBackground}></div>
    </div>
  );
};
export default Banerok;
