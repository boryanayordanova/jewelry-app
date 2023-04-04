import { useState } from "react";
import styles from "./Likes.module.scss";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import * as FirebaseFetchData from "./Services/FirebaseService";
import { useEffect } from "react";

export const Likes = ({ idItemForLike, itemLikes, itemLikedBy }) => {
    // const { contextMail } = useContext(AuthContext);
    const contextMail = useContext(AuthContext);

    const [likes, setLikes] = useState(itemLikes);

    const [jewelryStatusLiked, setjewelryStatusLiked] = useState([]);

    const [isClicked, setIsClicked] = useState(false);
    

    const [newLike, setNewLike] = useState({
        countLikes: itemLikes,
        likedBy: itemLikedBy
    });

    // const [newLikePlus, setNewLikePlus] = useState({
    //     countLikes: itemLikes + 1,
    //     likedBy: itemLikedBy.concat(' ', contextMail),
    // });



    useEffect(() => {
        FirebaseFetchData.getOne(idItemForLike).then((result) => {
            setjewelryStatusLiked(result);
        });
    }, [idItemForLike]);

    let isMatched = false;



    // let likedByList = jewelryStatusLiked.likedBy;
    //console.log(jewelryStatusLiked.likedBy);

    // let found = Object.keys(itemLikedBy).filter(function(key) {
    //     return itemLikedBy[key] === contextMail;
    //   });

    //   let foundLenght = found.length;
    //   console.log(foundLenght);

    //   for (let k in itemLikedBy) {
    //     if (itemLikedBy[k] === contextMail) {
    //         console.log("yes");
    //         // (isMatched = true)
    //         // return true;

    //     }
    // }

    // console.log();

    let foundMailInlikedBy = itemLikedBy.includes(contextMail);

    <>
        {contextMail && (
            <>
                {
                    <>
                    {
                        
                        // jewelryStatusLiked.likedBy === contextMail
                        //  ? // console.log("match")
                        //    (isMatched = true)
                        //  : (isMatched = false)
                        //  //console.log("not match")
                         
                         foundMailInlikedBy ?
                            //alert('exists');
                         
                            isMatched = true
                        :
                            isMatched = false
                       
                    }
                    </>
                }
            </>
        )}
    </>;

    const handleClick = (idItemForLike) => {

        console.log("Original");
        console.log(newLike);
        console.log("Original Data");
        console.log(newLike.countLikes);
        console.log(newLike.likedBy);

        if (isMatched) {
            console.log("___________________________________________");
            console.log("match..");

            if (isClicked) {
                console.log("Is Active:");
                setLikes(likes + 1);
                // setNewLike((prevState) => ({
                //     // idItemForLike: {                       // object that we want to update
                //     // ...prevState.idItemForLike,           // keep all other key-value pairs
                //     // ...prevState,
                //     countLikes: itemLikes + 1,                  // update the value of specific key
                    
                //     //likedBy: prevState.likedBy + " " + contextMail,
                //     likedBy: prevState.likedBy.concat(' ', contextMail),
                //     //
                // }));
                newLike.countLikes = newLike.countLikes + 1;
                newLike.likedBy = newLike.likedBy.concat(' ', contextMail);

                console.log(newLike);
                likesUpdate(idItemForLike, newLike);
            } else {
                console.log("Not Active:");              
                setLikes(likes - 1 );
                // setNewLike((prevState) => ({
                //     // setNewLike({
                //     // idItemForLike: {                     // object that we want to update
                //     // ...prevState.idItemForLike,          // keep all other key-value pairs
                //     // ...prevState,
                //     countLikes: itemLikes - 1,              // update the value of specific key
                //     likedBy: prevState.likedBy.replace(contextMail, ''),

                //     //
                // }));
                newLike.countLikes = newLike.countLikes - 1;
                newLike.likedBy = newLike.likedBy.replace(contextMail, '');
    
                console.log(newLike);
                likesUpdate(idItemForLike, newLike);
            }
    
            setIsClicked(!isClicked);

        } else {
            console.log("_____________________________________________");
            console.log("Not match..");
            
            if (isClicked) {
                console.log("Not Active:");
                setLikes(likes - 1);
                // setNewLike((prevState) => ({
                //     // setNewLike({
                //     // idItemForLike: {                   // object that we want to update
                //     // ...prevState.idItemForLike,    // keep all other key-value pairs
                //     // ...prevState,
                //     countLikes: itemLikes - 1, // update the value of specific key
                //     likedBy: prevState.likedBy.replace(contextMail, ''),
                //     //likedBy: prevState.likedBy + "," + contextMail,
                //     //
                //     //
                // }));

                newLike.countLikes = newLike.countLikes - 1;
                newLike.likedBy = newLike.likedBy.replace(contextMail, '');

                likesUpdate(idItemForLike, newLike);
    
                console.log(newLike);
                
            } else {
                console.log("Is Active:");
                setLikes(likes + 1);
                // setNewLike((prevState) => ({
                //     // idItemForLike: {                          // object that we want to update
                //     // ...prevState.idItemForLike,           // keep all other key-value pairs
                //     // ...prevState,
                //     countLikes: itemLikes + 1, // update the value of specific key
                //     likedBy: prevState.likedBy.concat(' ', contextMail),
             

                // }));
                newLike.countLikes = newLike.countLikes + 1;
                newLike.likedBy = newLike.likedBy.concat(' ', contextMail);
                
                console.log(newLike);
                likesUpdate(idItemForLike, newLike);

            }
    
            setIsClicked(!isClicked);


        }

        console.log("Original After");
        console.log(newLike);
        
        // console.log("item Id:");
        // console.log(idItemForLike);
        // console.log("contextMail:");
        // console.log(contextMail);
        //console.log(contextMail);

        // if (isClicked) {
        //     console.log("Is Clicked:");
        //     setLikes(likes - 1);
        //     setNewLike((prevState) => ({
        //         // idItemForLike: {                          // object that we want to update
        //         // ...prevState.idItemForLike,           // keep all other key-value pairs
        //         countLikes: itemLikes, // update the value of specific key
        //         likedBy: "",
        //         //
        //     }));
        //     console.log(newLike);
        //     likesUpdate(idItemForLike, newLike);
        // } else {
        //     console.log("Not Clicked:");
        //     setLikes(likes + 1);
        //     setNewLike((prevState) => ({
        //         // setNewLike({
        //         // idItemForLike: {                   // object that we want to update
        //         // ...prevState.idItemForLike,    // keep all other key-value pairs
        //         countLikes: itemLikes + 1, // update the value of specific key
        //         likedBy: contextMail,
        //         //
        //     }));

        //     console.log(newLike);
        //     likesUpdate(idItemForLike, newLike);
        // }

        // setIsClicked(!isClicked);
    };

    const likesUpdate = async (jId, jLikes) => {
        await FirebaseFetchData.update(jId, jLikes);
    };



    return (
        <>
            {/* <div className={styles["jewelry-likes"]}>
            <div className={styles["jewelry-likes-num"]}>{likes}</div>
            <button className={ isClicked ? styles["liked"] : <></>} onClick={() => handleClick(idItemForLike)} >&#10084;</button>
        </div> */}

            {/* <div className={styles["jewelry-likes"]}>
            <div className={styles["jewelry-likes-num"]}>{likes}</div>
            <button className={ styles["liked"] } onClick={() => handleClick(idItemForLike)} >&#10084;</button>
        </div> */}

            <>
                {isMatched ? (
                    <>
                        <div className={styles["jewelry-likes"]}>
                            <div className={styles["jewelry-likes-num"]}>
                                {likes}
                            </div>
                            <button
                                className={
                                    isClicked
                                        ? styles["unliked"]
                                        : styles["liked"]
                                }
                                onClick={() => handleClick(idItemForLike)}
                            >
                                &#10084;
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        {contextMail ? (
                            <div className={styles["jewelry-likes"]}>
                                <div className={styles["jewelry-likes-num"]}>
                                    {likes}
                                </div>
                                <button
                                    className={
                                        isClicked
                                            ? styles["liked"]
                                            : styles["unliked"]
                                    }
                                    onClick={() => handleClick(idItemForLike)}
                                >
                                    &#10084;
                                </button>
                            </div>
                        ) : (
                            <div className={styles["jewelry-likes"]}>
                                <div className={styles["jewelry-likes-num"]}>
                                    {likes}
                                </div>
                                <div className={styles["jewelry-likes-btn"]}>
                                    | Likes
                                </div>
                            </div>
                        )}
                    </>
                )}
            </>

        {/* <AuthContext.Consumer>
        {(context) => (
          // <p>im inside the consumer {console.log(context)}</p>
          <div className={styles["jewelry-likes"]}>
          <div className={styles["jewelry-likes-num"]}>{likes}</div>
          <button  className={ isClicked && styles["liked"] } onClick={() => handleClick(idItemForLike, context)}>&#10084;</button>
      </div>
        )}
      </AuthContext.Consumer> */}
        </>
    );
};
