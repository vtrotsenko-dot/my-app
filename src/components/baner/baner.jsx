import style from "./baner.module.css";

const banerText = {
  menu: {
    name: "МЕНЮ",
    podName: "Страви, які дарують затишок і гарний настрій",
    styleClass: style.zagolovokMenu,
  },
  banket: {
    name: "Банкети та Кейтеринг",
    podName: "Святкуйте важливі події разом із «Солохою»",
    styleClass: style.zagolovokBanket,
  },
};

const Banerok = ({ type = "banket" }) => {
  const currentData = banerText[type] || banerText.banket;

  return (
    <div className={style.introEmblemme}>
      <div className={style.photoBackground}></div>
      <h4 className={currentData.styleClass}>{currentData.name}</h4>
      <h5 className={style.podzagolovok}>{currentData.podName}</h5>
      <div className={style.photoBackground}></div>
    </div>
  );
};

export default Banerok;