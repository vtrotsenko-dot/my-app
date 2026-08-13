import style from "./columPhoto.module.css"
const Colum = () => {
    
    const galeryPhoto = [
    {
        id: 1, 
        url: "/photo_baru/Maskgroup.webp"
    },
    {
        id: 2, 
        url: "/photo_baru/Maskgroup1.webp"
    },
    {
        id: 3, 
        url: "/photo_baru/Maskgroup2.webp"
    },
    {
        id: 4, 
        url: "/photo_baru/Maskgroup3.webp"
    },
    {
        id: 5, 
        url: "/photo_baru/Maskgroup4.webp"
    },
    {
        id: 6, 
        url: "/photo_baru/Maskgroup5.webp"
    },
        {
        id: 7, 
        url: "/photo_baru/Maskgroup6.webp"
    },
        {
        id: 8, 
        url: "/photo_baru/Maskgroup7.webp"
    },
        {
        id: 9, 
        url: "/photo_baru/Maskgroup8.webp"
    },
        {
        id: 10, 
        url: "/photo_baru/Maskgroup9.webp"
    },
    {
        id: 11, 
        url: "/photo_baru/Maskgroup10.webp"
    },
    {
        id: 12, 
        url: "/photo_baru/Maskgroup11.webp"
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