import { Dish } from "../dish";
import style from "./dishList.module.css";

const DishList = ({ category }) => {
  const currentDishes = Dish[category] || [];

  return (
    <>
      {currentDishes.map((item) => (
        <li key={item.id} className={style.Dish}>
          <div className={style.forDish}>
            <div className={style.namePrice}>
              <h3>{item.name}</h3>
              <h2>{item.price} грн</h2>
            </div>

            <h4 className={style.description}>{item.description}</h4>

            {item.weight && (
              <div className={style.weightContainer}>
                <img src="/Scales.png" alt="Вага" />
                <h5>{item.weight}</h5>
              </div>
            )}
          </div>
        </li>
      ))}
    </>
  );
};

export default DishList;