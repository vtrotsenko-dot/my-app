import style from "./socMereg.module.css"
const mereg = [{
    id:1 , name: "Facebook", img:"/iconInfo/Facebook.svg"
},{
    id:2 , name: "Instagram", img:"/iconInfo/Instagram.svg"
}]

const Socmereg = () => {
    return(            
        <div className={style.sylky}>    
                  {mereg.map((item) => (
                <div className={style.meregElement} id={item.id}>
              <img src={item.img} alt="" />
              <p>{item.name}</p>
            </div>
                  ))}
        </div>
    );
};
export default Socmereg