import style from "./socMereg.module.css";
const mereg = [
  {
    id: 1,
    name: "Facebook",
    img: "/iconInfo/Facebook.svg",
    url: "https://www.facebook.com/oksana.mazur.186458",
  },
  {
    id: 2,
    name: "Instagram",
    img: "/iconInfo/Instagram.svg",
    url: "https://www.instagram.com/soloha_bar?igsh=MWEyNGszdTBwMDVncw==",
  },
];

const Socmereg = () => {
  return (
    <div className={style.sylky}>
      {mereg.map((item) => (
        <div key={item.id}>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            <div className={style.meregElement} id={item.id}>
              <img src={item.img} alt="" className={style.meregIcon} />
              <p className={style.meregText}>{item.name}</p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};
export default Socmereg;
