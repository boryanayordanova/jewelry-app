import styles from "./JewelryItem.module.scss";
import { Link } from "react-router-dom";

export default function JewelryItem ({
    id, name, image, category, countLikes,
}) {
  
    return (
        <>
        <div className={styles["jewelry-item-container"]}>
            <Link to={`/${id}`} />
            <div className={styles["jewelry-img"]}><img src={image} alt={name}/></div>
            <div className={styles["jewelry-item-data"]}>
                <div className={styles["jewelry-name"]}><p>Name:</p><span>{name}</span></div>
                <div><p>Category:</p><span>{category}</span></div>
            </div>
            
            <div className={styles["jewelry-likes"]}>
                <div className={styles["jewelry-likes-num"]}>{countLikes}</div>
                <button className={styles["jewelry-likes-btn"]}>&#10084;</button>
            </div>
        </div>
    </>
    );
}