import styles from "./JewelryCreate.module.css";
import { useState } from "react";

export const JewelryCreate = ({
    jewelry,    
    onClose,
}) => {

    const [jewCategory, setJewCategory] = useState('Earrings');

    return (
        
        <div className={styles["overlay"]}>
        <div className={styles["backdrop"]}></div>
        <div className={styles["modal"]}>
            {/* <div className="jewelry-container"> */}
            <div className="">
                <header>
                    <h2>Add/Edit Jewelry</h2>
                    <button className={styles["btn-close"]} onClick={onClose}>X</button>
                </header>
                {/* <form onSubmit={(e) => onjewelryCreateSubmit(e, jewelry?._id)}> */}
                <form className={styles['jewelry-form']}>
                    <div className="form-row">
                        <div className={styles["form-group"]}>
                            <label htmlFor="name">Name</label>
                            <div className="input-wrapper">
                                <span><i className="fa-solid fa-jewelry"></i></span>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    //value={formValues.name}
                                    // onChange={formChangeHandler}
                                    // onBlur={formValidate}
                                    // style={formErrors.name ? { borderColor: "red" } : {}}
                                />
                            </div>
                            {/* {formErrors.name &&
                                <p className="form-error">
                                    {formErrors.name}
                                </p>
                            } */}
                        </div>
                        <div className={styles["form-group"]}>
                            <label htmlFor="color">Color</label>
                            <div className="input-wrapper">
                                <span><i className="fa-solid fa-jewelry"></i></span>
                                {/* <input id="color" name="color" type="text" value={formValues.color} onChange={formChangeHandler} onBlur={formValidate} /> */}
                                <input id="color" name="color" type="text" />
                                
                            </div>
                            {/* {formErrors.color &&
                                <p className="form-error">
                                    {formErrors.color}
                                </p>
                            } */}
                        </div>

                        <div className={styles["form-group"]}>
                            <label htmlFor="jewCategory">Category</label>
                            {/* <select name="color" id="color" value={color} onChange={onOccupationChange}> */}
                            <select name="jewCategory" id="jewCategory" value={jewCategory}>
                                <option value="earrings">Earrings</option>
                                <option value="bricelet">Bricelet</option>
                                <option value="necklace">Necklace</option>
                            </select>
                        </div>


                    </div>

                    {/* <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <div className="input-wrapper">
                                <span><i className="fa-solid fa-envelope"></i></span>
                                <input id="email" name="email" type="text" defaultValue={jewelry?.email} />
                            </div>
                            <p className="form-error">Email is not valid!</p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phoneNumber">Phone number</label>
                            <div className="input-wrapper">
                                <span><i className="fa-solid fa-phone"></i></span>
                                <input id="phoneNumber" name="phoneNumber" type="text" defaultValue={jewelry?.phoneNumber} />
                            </div>
                            <p className="form-error">Phone number is not valid!</p>
                        </div>
                    </div> */}

                    
                    <div className={styles["form-group"]}>
                        <label htmlFor="imageUrl">Image Url</label>
                        <div className="input-wrapper">
                            <span><i className="fa-solid fa-image"></i></span>
                            <input id="imageUrl" name="imageUrl" type="text" defaultValue={jewelry?.imageUrl} />
                        </div>
                        {/* <p className="form-error">ImageUrl is not valid!</p> */}
                    </div>

                    {/* <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="country">Country</label>
                            <div className="input-wrapper">
                                <span><i className="fa-solid fa-map"></i></span>
                                <input id="country" name="country" type="text" defaultValue={jewelry?.address.country} />
                            </div>
                            <p className="form-error">
                                Country should be at least 2 characters long!
                            </p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">City</label>
                            <div className="input-wrapper">
                                <span><i className="fa-solid fa-city"></i></span>
                                <input id="city" name="city" type="text" defaultValue={jewelry?.address.city} />
                            </div>
                            <p className="form-error">
                                City should be at least 3 characters long!
                            </p>
                        </div>
                    </div> */}

                    {/* <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="street">Street</label>
                            <div className="input-wrapper">
                                <span><i className="fa-solid fa-map"></i></span>
                                <input id="street" name="street" type="text" defaultValue={jewelry?.address.street} />
                            </div>
                            <p className="form-error">
                                Street should be at least 3 characters long!
                            </p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="streetNumber">Street number</label>
                            <div className="input-wrapper">
                                <span><i className="fa-solid fa-house-chimney"></i></span>
                                <input id="streetNumber" name="streetNumber" type="text" defaultValue={jewelry?.address.streetNumber} />
                            </div>
                            <p className="form-error">
                                Street number should be a positive number!
                            </p>
                        </div>
                    </div> */}
                    <div id="form-actions">
                        <button id="action-save" className="btn" type="submit">Save</button>
                        <button id="action-cancel" className="btn" type="button">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
}