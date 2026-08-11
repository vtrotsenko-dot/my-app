import style from"./cards.module.css"

const kontakts = [
  {
    id: 1,
    name: 'Ласкаво просимо до нашого кафе-бару',
    img: '/iconInfo/Heart.svg',
  },
  {
    id: 2,
    name: 'с-ще Липова Долина, вулиця Троїцька, 2-Б',
    img: '/iconInfo/Location.webp',
  },
  {
    id: 3,
    name: '+380 99 685 8836',
    img: '/iconInfo/phone.webp',
  },
  {
    id: 4,
    name: 'Щодня 09:00 - 18:00',
    img: '/iconInfo/Clock.webp',
  },
];
const HeaderCards = () => {
  return (
    <div>
      {kontakts.map((item) => (
        <div key={item.id} className={style.headerContent}>
          <img src={item.img} alt={item.name} />
          <div className={style.heaederh4}>
            <h4>{item.name}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HeaderCards
