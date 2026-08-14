import { Link } from "react-router-dom";
import style from "./mainButton.module.css";

const bnt = [
  {
    id: 1,
    name: "МЕНЮ",
    url: "/Menu",
  },
  { id: 2, 
    name: "Банкети та кейтеринг", 
    url: "/Banket" },
];

const MainButton = () => {
  return (
    <div>
      {bnt.map((item) => (
        <Link to={item.url} className={style.mainBnt} id={item.id}>
          <button className={style.mainButton}
          style={{
            fontSize: item.id === 2 ? '32px' : undefined 
          }}>{item.name}</button>
        </Link>
      ))}
    </div>
  );
};

export default MainButton;
