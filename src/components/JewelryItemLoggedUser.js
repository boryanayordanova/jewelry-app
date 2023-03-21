import styles from "./JewelryItem.module.scss";


export default function JewelryItemLoggedUser ({
    name, color, id, image, category
}) {
  
    return (
        <>
        {/* <h1>Item</h1> */}
        <div className={styles["jewelry-item-container"]}>
        <div className={styles["jewelry-img"]}><img src={image} alt={name}/></div>

        <div className={styles["jewelry-item-data"]}>
            {/* <div>ID: <span>{id}</span></div> */}
            <div className={styles["jewelry-name"]}>Name: <span>{name}</span></div>
            {/* <div>Color: <span>{color}</span></div>             */}
            <div>Category: <span>{category}</span></div>
            {/* <div>Category: <span>{category}</span></div>
            <div>Price: <span>{price} bgn</span></div> */}
        
        </div>
            <div className={styles["jewelry-buttons"]}>
                <button>Edit</button>
                <button>Delete</button>
            </div>
            <div className={styles["jewelry-likes"]}>
                <div>14</div>
                <button>&#10084;</button>
            </div>

    </div>
    </>
    );
}