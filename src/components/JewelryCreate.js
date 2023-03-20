import styles from "./JewelryCreate.module.scss";
import { useState } from "react";

export const JewelryCreate = ({ 
    jewelry, 
    onCloseForm,
    dataCreatedJewelryForm
    
 }) => {

    const [formValues, setformValues] = useState({
        name: "",
        color: "",
        category: "earrings",
        image: "http://via.placeholder.com/250x250",
        description: "",
    });

    const onSubmitCreateJewelryForm = (e) => {
        e.preventDefault();
        console.log("Created vals");
        console.log(formValues);
        dataCreatedJewelryForm(formValues);
       
    }


    const onChangeHandlerCreateJewelry = (e) => {
        setformValues(state => ({...state, [e.target.name]: e.target.value}))
    }

 
    return (
        <div className={styles["overlay"]}>
            <div className={styles["backdrop"]}></div>
            <div className={styles["modal"]}>
                <header>
                    <h2>Add/Edit Jewelry</h2>
                    <button className={styles["btn-close"]} onClick={onCloseForm}>X</button>
                </header>

                <form className={styles["jewelry-form"]} onSubmit={e => onSubmitCreateJewelryForm(e, jewelry?.id)}>

                    <div className={styles["form-group"]}>
                        <label htmlFor="name">Name:</label>
                        <input value={formValues.name} onChange={onChangeHandlerCreateJewelry} id="name" name="name" type="text" placeholder="Enter Jewelry Name..." />
                        {/* {formErrors.name &&
                                    <p className="form-error">
                                        {formErrors.name}
                                    </p>
                                } */}
                    </div>

                    <div className={styles["form-row"]}>
                        <div className={styles["form-group"]}>
                            <label htmlFor="color">Color:</label>
                            <input value={formValues.color} onChange={onChangeHandlerCreateJewelry} id="color" name="color" type="text" placeholder="Enter Jewelry Color..." />
                            {/* {formErrors.color &&
                                    <p className="form-error">
                                        {formErrors.color}
                                    </p>
                                } */}
                        </div>

                        <div className={styles["form-group"]}>
                            <label htmlFor="jewCategory">Category:</label>
                            <select name="jewCategory" id="jewCategory" onChange={onChangeHandlerCreateJewelry} placeholder="Select Jewelry Category..." >
                                <option value="earrings">Earrings</option>
                                <option value="bricelet">Bricelet</option>
                                <option value="necklace">Necklace</option>
                            </select>
                        </div>
                    </div>

                    <div className={styles["form-group"]}>
                        <label htmlFor="image">Image Url:</label>
                        {/* <input value={formValues.image} onChange={onChangeHandlerCreateJewelry} id="image" name="image" type="text" defaultValue={jewelry?.image} placeholder="Place Image Here..." /> */}
                        <input value={formValues.image} onChange={onChangeHandlerCreateJewelry} id="image" name="image" type="text"  placeholder="Place Image Here..." />
                        {/* <p className="form-error">image is not valid!</p> */}
                    </div>

                    <div className={styles["form-group"]}>
                        <label htmlFor="description">Description:</label>
                        <textarea value={formValues.description} onChange={onChangeHandlerCreateJewelry} name="description" id="description" cols="" rows="5" placeholder="Describe Jewelry..." ></textarea>
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
