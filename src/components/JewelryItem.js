import styles from "./JewelryItem.module.scss";
import { Link } from "react-router-dom";

export default function JewelryItem ({
    id, name, image, category, countLikes,
}) {
  
    return (
        <>
        {/* <h1>Item</h1> */}
        <div className={styles["jewelry-item-container"]}>
        <Link to={`/${id}`} />
        <div className={styles["jewelry-img"]}><img src={image} alt={name}/></div>

        <div className={styles["jewelry-item-data"]}>
            {/* <div>ID: <span>{id}</span></div> */}
            <div className={styles["jewelry-name"]}>Name: <span>{name}</span></div>
            {/* <div>Color: <span>{color}</span></div>             */}
            <div>Category: <span>{category}</span></div>
            {/* <div>Category: <span>{category}</span></div>
            <div>Price: <span>{price} bgn</span></div> */}
        
        </div>
        
            <div className={styles["jewelry-likes"]}>
                <div className={styles["jewelry-likes-num"]}>{countLikes}</div>
                <button className={styles["jewelry-likes-btn"]}>&#10084;</button>
            </div>

    </div>
    </>
    );
}