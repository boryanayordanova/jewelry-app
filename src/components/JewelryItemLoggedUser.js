import styles from "./JewelryItem.module.scss";
import { Link } from "react-router-dom";


export default function JewelryItemLoggedUser ({
    id, name, image, category, countLikes,
    onDeleteClick,
    onEditClick
}) {


    return (

        <div className={styles["jewelry-item-container"]} >
            <Link to={`/${id}`} />
            <div>{id}</div>
            <div className={styles["jewelry-img"]}><img src={image} alt={name}/></div>
            <div className={styles["jewelry-item-data"]}>
                <div className={styles["jewelry-name"]}><p>Name:</p> <span>{name}</span></div>
                <div><p>Category:</p> <span>{category}</span></div>
            </div>
            <div className={styles["jewelry-buttons"]}>
                <button onClick={() => onEditClick(id)}>Edit</button>
                <button onClick={() => onDeleteClick(id)}>Delete</button>
            </div>
            <div className={styles["jewelry-likes"]}>
                <div className={styles["jewelry-likes-num"]}>{countLikes}</div>
                <div className={styles["jewelry-likes-btn"]}>| Likes</div>
            </div>
        </div>
    
    );
}