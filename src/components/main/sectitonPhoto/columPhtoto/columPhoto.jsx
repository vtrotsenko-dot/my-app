import style from "./columPhoto.module.css"
const Colum = () => {
    
    const galeryPhoto = [
    {
        id: 1, 
        url: "/photo_baru/Maskgroup.png"
    },
    {
        id: 2, 
        url: "/photo_baru/Maskgroup1.png"
    },
    {
        id: 3, 
        url: "/photo_baru/Maskgroup2.png"
    },
    {
        id: 4, 
        url: "/photo_baru/Maskgroup3.png"
    },
    {
        id: 5, 
        url: "/photo_baru/Maskgroup4.png"
    },
    {
        id: 6, 
        url: "/photo_baru/Maskgroup5.png"
    },
        {
        id: 7, 
        url: "/photo_baru/Maskgroup6.png"
    },
        {
        id: 8, 
        url: "/photo_baru/Maskgroup7.png"
    },
        {
        id: 9, 
        url: "/photo_baru/Maskgroup8.png"
    },
        {
        id: 10, 
        url: "/photo_baru/Maskgroup9.png"
    },
    {
        id: 11, 
        url: "/photo_baru/Maskgroup10.png"
    },
    {
        id: 12, 
        url: "/photo_baru/Maskgroup11.png"
    },
]
    
    
    return(

        <div class={style.galleryGrid}>
            {galeryPhoto.map((item) => (
                <img src={item.url} id = {item.id} alt="#" />
            ))}

        </div>

    )
}
export default Colum