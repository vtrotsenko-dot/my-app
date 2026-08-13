import style from "./mainButton.module.css";

const bnt = [
  {
    id: 1,
    name: "МЕНЮ",
    url: "/",
  },
  { id: 2, 
    name: "Банкети та кейтеринг", 
    url: "/" },
];

const MainButton = () => {
  return (
    <div>
      {bnt.map((item) => (
        <a href={item.url} className={style.mainBnt} id={item.id}>
          <button className={style.mainButton}>{item.name}</button>
        </a>
      ))}
    </div>
  );
};

export default MainButton;
