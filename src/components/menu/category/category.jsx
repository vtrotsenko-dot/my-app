import { MENUCATEGORIES } from "../dish"
import DishList from "../dishList/dishList"
import style from "./category.module.css"
const Category = () => {
    return(
        <div>
    {MENUCATEGORIES.map((item) => (
        <section id={item.id} key={item.id} style={{scrollMarginTop: '80px'}}>
          <div className={style.nameSection}>
            <div className= {style.vizerunok} style={{backgroundPosition: 'right'}}></div>
            <h2>{item.text}</h2>
            <div className= {style.vizerunok} style={{backgroundPosition: 'left'}}></div>
          </div>

          <ul
            className={style.dishList}
            style={{ backgroundImage: `url(${item.bgImage})` }}
          >
            <DishList category = {item.id} />
          </ul>
        </section>
      ))}
      </div>
    )
}
export default Category