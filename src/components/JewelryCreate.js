import styles from "./JewelryCreate.module.scss";
import { useState } from "react";

export const JewelryCreate = ({ 
    jewelry, 
    onCloseForm,
    dataCreatedJewelryForm,    
 }) => {

    const [updateValues, setUpdateValues] = useState({});

    const [formValues, setformValues] = useState({
        // name: "",
        // color: "",
        category: "earrings",
        // image: "",
        // description: "",
        countLikes: 1,
        //owner: jewelry?.jewData.owner
    });

    const onSubmitJewelryForm = (e, id) => {
        e.preventDefault();
        console.log("Save CLicked:..");
        console.log("formValues:");
        console.log(formValues);
  
        dataCreatedJewelryForm(formValues , id);
        //dataCreatedJewelryForm(formValues , id);
     
        console.log("Save CLicked:..! end");
        console.log("_____________")
       
    }


    const onChangeHandlerCreateJewelry = (e) => {
        setformValues(state => ({...state, [e.target.name]: e.target.value}))
        setUpdateValues(state => ({...state, [e.target.name]: e.target.value}))
    }

 
    return (
        <div className={styles["overlay"]}>
            <div className={styles["backdrop"]}></div>
            <div className={styles["modal"]}>
                <header>
                    <h2>Add/Edit Jewelry</h2>
                    <button className={styles["btn-close"]} onClick={onCloseForm}>X</button>
                </header>

                <form className={styles["jewelry-form"]} onSubmit={(e) => onSubmitJewelryForm(e, jewelry?.id)}>

                    <div className={styles["form-group"]}>
                        <label htmlFor="name">Name:</label>
                        {/* <input value={formValues.name} onChange={onChangeHandlerCreateJewelry} id="name" name="name" type="text" placeholder="Enter Jewelry Name..." /> */}
                        <input defaultValue={jewelry?.jewData.name} onChange={onChangeHandlerCreateJewelry} id="name" name="name" type="text" placeholder="Enter Jewelry Name..." />
                        {/* {formErrors.name &&
                                    <p className="form-error">
                                        {formErrors.name}
                                    </p>
                                } */}
                    </div>

                    <div className={styles["form-row"]}>
                        <div className={styles["form-group"]}>
                            <label htmlFor="color">Color:</label>
                            {/* <input value={formValues.color} onChange={onChangeHandlerCreateJewelry} id="color" name="color" type="text" placeholder="Enter Jewelry Color..." /> */}
                            <input defaultValue={jewelry?.jewData.color} onChange={onChangeHandlerCreateJewelry} id="color" name="color" type="text" placeholder="Enter Jewelry Color..." />
                            {/* {formErrors.color &&
                                    <p className="form-error">
                                        {formErrors.color}
                                    </p>
                                } */}
                        </div>

                        <div className={styles["form-group"]}>
                            <label htmlFor="category">Category:</label>
                            <select defaultValue={jewelry?.jewData.category} name="category" id="category" onChange={onChangeHandlerCreateJewelry} placeholder="Select Jewelry Category..." >
                                <option value="earrings">Earrings</option>
                                <option value="bricelet">Bricelet</option>
                                <option value="necklace">Necklace</option>
                            </select>
                        </div>
                    </div>

                    <div className={styles["form-group"]}>
                        <label htmlFor="image">Image Url:</label>
                        {/* <input value={formValues.image} onChange={onChangeHandlerCreateJewelry} id="image" name="image" type="text" defaultValue={jewelry?.image} placeholder="Place Image Here..." /> */}
                        {/* <input value={formValues.image} onChange={onChangeHandlerCreateJewelry} id="image" name="image" type="text"  placeholder="Place Image Here..." /> */}
                        <input defaultValue={jewelry?.jewData.image} onChange={onChangeHandlerCreateJewelry} id="image" name="image" type="text"  placeholder="Place Image Here..." />
                        {/* <p className="form-error">image is not valid!</p> */}
                    </div>

                    <div className={styles["form-group"]}>
                        <label htmlFor="description">Description:</label>
                        {/* <textarea value={formValues.description} onChange={onChangeHandlerCreateJewelry} name="description" id="description" cols="" rows="5" placeholder="Describe Jewelry..." ></textarea> */}
                        <textarea defaultValue={jewelry?.jewData.description} onChange={onChangeHandlerCreateJewelry} name="description" id="description" cols="" rows="5" placeholder="Describe Jewelry..." ></textarea>
                        {/* <p className="form-error">image is not valid!</p> */}
                    </div>

                    <div id={styles["form-actions"]}>
                        <button id="action-save" className="btn" type="submit"> Save </button>
                        <button id="action-cancel" className="btn" type="button" onClick={onCloseForm}> Cancel </button>
                    </div>

                </form>

            </div>

        </div>
    );
};
