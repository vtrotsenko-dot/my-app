import Colum from "./columPhtoto/columPhoto";
import style from "./sectionPhoto.module.css";
const SectionPhoto = () => {
  return (
    <div>
    <hr className={style.classHr}/>
      <div>
        <h3 className={style.galleryTitle}>Наші фотографії</h3>
            <Colum />
      </div>
    </div>
  );
};

export default SectionPhoto;
