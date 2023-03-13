import styles from "./JewelryItem.module.css";

export default function JewelryItem ({
    name, color, id, image
}) {
    return (
        <>
        {/* <h1>Item</h1> */}
        <div className={styles["jewelry-item-container"]}>
        <div className={styles["jewelry-img"]}><img src={image} alt={name}/></div>

        <div className={styles["jewelry-item-data"]}>
            {/* <div>ID: <span>{id}</span></div> */}
            <div className={styles["jewelry-name"]}>Name: <span>{name}</span></div>
            <div>Color: <span>{color}</span></div>
            {/* <div>Category: <span>{category}</span></div>
            <div>Price: <span>{price} bgn</span></div> */}
        
        </div>
            <div className={styles["jewelry-buttons"]}>
                <button>Edit</button>
                <button>Delete</button>
            </div>

    </div>
    </>
    );
}