import { useState } from "react";
import styles from "./Likes.module.scss";

export const Likes = ({
    itemLikes,
}) => {

    const [likes, setLikes] = useState(itemLikes);
    const [isClicked, setIsClicked] = useState(false);
  
   
    const handleClick = () => {
        if (isClicked) {
          setLikes(likes - 1);
        } else {
          setLikes(likes + 1);
        }
        setIsClicked(!isClicked);
      };
 

    return (
        <div className={styles["jewelry-likes"]}>
            <div className={styles["jewelry-likes-num"]}>{likes}</div>
            {/* <button  className={ `jewelry-likes-btn ${isClicked && 'liked'}` } onClick={ handleClick }>&#10084;</button> */}
            <button  className={ isClicked && styles["liked"] } onClick={ handleClick }>&#10084;</button>

            {/* className={styles["jewelry-likes-btn"]} */}
        </div>
    )
}