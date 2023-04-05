import styles from "./JewelryCreate.module.scss";
import { useState } from "react";

export const JewelryCreate = ({
    jewelry,
    onCloseForm,
    dataCreatedJewelryForm,
    createdOwner,
}) => {
    const [formValues, setformValues] = useState({
        // name: "",
        // color: "",
        // category: "earrings",
        // image: "",
        // description: "",
        likedBy: "",
        countLikes: 0,
        owner: createdOwner,
    });

    const [formErrors, setFormErros] = useState({
        name: "",
        color: "",
        category: "",
        image: "",
        description: "",
    });

    const onSubmitJewelryForm = (e, id) => {
        e.preventDefault();
        console.log("Save CLicked:..");
        console.log("formValues:");
        console.log(formValues);

    
        const errors = {};
        console.log(errors);
        console.log(formValues);
        console.log(formValues.name);
        console.log(formValues.color);
        console.log(formValues.category);
        console.log(formValues.image);

        // {!id ?
        //     //console.log("new - nqma id")
        //     setFormErros(errors)
        //     :
        //     console.log("update - ima id")
        // }
   
        if (
            (formValues.name === undefined) || (formValues.name.length === 0) 
            // (formValues.name.length < 3 || formValues.name.length > 20)
        ) {
            errors.name = "Name should be between 3 and 20 characters.";
            
        }

        if (
            formValues.color === undefined
            // (value.length < 3 || value.length > 20)
        ) {
            errors.color = "Please set a color.";
        }

        if (
            formValues.category === undefined 
            // (value.length === 0)
        ) {
            errors.category = "Please select category.";
        }

        if (formValues.image === undefined) {
            errors.image = "Please paste an image url.";
        }



        
        {
            JSON.stringify(errors) !== '{}'?            
            // console.log("ima greshki")
            <>            
            {id ?
                //console.log("update")                                
                <>
                {
                    //notning changed
                    formValues.name === undefined && formValues.color === undefined && formValues.category === undefined && formValues.image === undefined ?
                    dataCreatedJewelryForm(formValues, id)                       
                    :                    
                    <>
                    {   //ima promqna
                        (formValues.name !== (undefined || "")) && (formValues.color !== (undefined || "")) && (formValues.category !== (undefined || "")) && (formValues.image !== (undefined || "")) ?
                        // (formValues.name !== (undefined || "")) || (formValues.color !== (undefined || "")) || (formValues.category !== (undefined || "")) || (formValues.image !== (undefined || "")) ?
                        dataCreatedJewelryForm(formValues, id)
                        :
                        setFormErros(errors)
                    }
                    </>
                }
                </>
                
                :
                //console.log("new")
                setFormErros(errors)
             
            }
            </>
            
            :
            //console.log("nqma greshki")
            dataCreatedJewelryForm(formValues, id)                     


        }
  
        // setFormErros(errors);

        // {errors ?
        //     <>
        //     setFormErros(errors);
        //     console.log("err");
        //     </>
            
            
        //     :
        //     dataCreatedJewelryForm(formValues, id)
        // }
        

        //New
        // {!id && (!formValues.name || !formValues.color || !formValues.category || !formValues.image) ?
        //     alert('All mandatory fields in the form should be populated')           
        //     :       
        //     // dataCreatedJewelryForm(formValues, id); 
          
        //         //Update
        //         <>
        //         {
        //             id && ( formValues.name === undefined && formValues.color === undefined && formValues.category === undefined && formValues.image === undefined) ?
        //             alert("nothing changes")
        //             :
                
        //             <>
        //             {

        //                 id && (formValues.name !== undefined && formValues.name === "" ) || 
        //                 (formValues.color !== undefined && formValues.color === "") ||
        //                 (formValues.category !== undefined && formValues.category === "") ||
        //                 (formValues.image !== undefined && formValues.image === "")

        //                 // id && (formValues.name == undefined && formValues.name.lenght === 0 ) || 
        //                 // (formValues.color !== undefined && formValues.color.lenght === 0) ||
        //                 // (formValues.category !== undefined && formValues.category.lenght === 0) ||
        //                 // (formValues.image !== undefined && formValues.image.lenght === 0)

        //                 ? 
                                      
        //                 alert("bad data") 
        //                 :
        //                 dataCreatedJewelryForm(formValues, id)
                        
        //                 //alert("pass")

         
        //             }  
        //             </>                  
        //         }  
        //         </>
           
        // }  
        
        
 

        
    };

    const onChangeHandlerCreateJewelry = (e) => {
        setformValues((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));

        // setUpdateValues(state => ({...state, [e.target.name]: e.target.value}))
    };



    const formValidate = (e) => {
        // console.log("asdasd");
        // const value = e.target.value;
        // console.log(value);
        // const errors = {};
        // console.log(errors);
   
        // if (
        //     e.target.name === "name" &&
        //     (value.length < 3 || value.length > 20)
        // ) {
        //     errors.name = "Name should be between 3 and 20 characters.";
        // }

        // if (
        //     e.target.name === "color" &&
        //     (value.length < 3 || value.length > 20)
        // ) {
        //     errors.color = "Please set a color.";
        // }

        // if (
        //     e.target.name === "category" &&
        //     (value.length === 0)
        // ) {
        //     errors.category = "Please select category.";
        // }

        // if (e.target.name === "image" && (value.length === 0)) {
        //     errors.image = "Please paste an image url.";
        // }

        // if (e.target.name === "description" && (value.length === 0)) {
        //     errors.description =
        //         "Please add some description, like phone number, mail or any other addition info aboout the jewelry.";
        // }
          
        // setFormErros(errors);
    
    };

    return (
        <div className={styles["overlay"]}>
            <div className={styles["backdrop"]}></div>
            <div className={styles["modal"]}>
                <header>
                    <h2>Add/Edit Jewelry</h2>
                    <button
                        className={styles["btn-close"]}
                        onClick={onCloseForm}
                    >
                        X
                    </button>
                </header>

                <form
                    className={styles["jewelry-form"]}
                    onSubmit={(e) => onSubmitJewelryForm(e, jewelry?.id)}
                >
                    <div className={styles["form-group"]}>
                        <label htmlFor="name">Name:</label>                        
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Enter Jewelry Name..."
                            defaultValue={jewelry?.jewData.name}
                            onChange={onChangeHandlerCreateJewelry}
                            onBlur={formValidate}
                        />
                        {formErrors.name && (
                            <p className={styles["form-error"]}>{formErrors.name}</p>
                        )}
                    </div>                    

                    <div className={styles["form-row"]}>
                        <div className={styles["form-group"]}>
                            <label htmlFor="color">Color:</label>                            
                            <input
                                id="color"
                                name="color"
                                type="text"
                                placeholder="Enter Jewelry Color..."
                                defaultValue={jewelry?.jewData.color}
                                onChange={onChangeHandlerCreateJewelry}
                                onBlur={formValidate}
                            />
                            {formErrors.color && (
                                <p className={styles["form-error"]}>{formErrors.color}</p>
                            )}
                        </div>

                        <div className={styles["form-group"]}>
                            <label htmlFor="category">Category:</label>
                            <select
                                name="category"
                                id="category"                     
                                defaultValue={jewelry?.jewData.category}                                                       
                                // defaultValue={'DEFAULT'}                     
                                onChange={onChangeHandlerCreateJewelry}
                                onBlur={formValidate}
                            >
                                <option selected disabled>
                                    Choose One...
                                </option>
                                <option value="earrings">Earrings</option>
                                <option value="bracelet">Bracelet</option>
                                <option value="necklace">Necklace</option>
                            </select>
                            {formErrors.category && (
                                <p className={styles["form-error"]}>{formErrors.category}</p>
                            )}
                        </div>
                    </div>

                    <div className={styles["form-group"]}>
                        <label htmlFor="image">Image Url:</label>                  
                        <input
                            id="image"
                            name="image"
                            type="text"
                            placeholder="Place Image Here..."
                            defaultValue={jewelry?.jewData.image}
                            onChange={onChangeHandlerCreateJewelry}
                            onBlur={formValidate}
                        />       
                        {formErrors.image && (
                            <p className={styles["form-error"]}>{formErrors.image}</p>
                        )}                 
                    </div>

                    <div className={styles["form-group"]}>
                        <label htmlFor="description">Description:</label>                        
                        <textarea
                            name="description"
                            id="description"
                            cols=""
                            rows="5"
                            placeholder="Describe Jewelry..."
                            defaultValue={jewelry?.jewData.description}
                            onChange={onChangeHandlerCreateJewelry}
                            onBlur={formValidate}
                        ></textarea> 
                        {formErrors.description && (
                            <p className={styles["form-error"]}>{formErrors.description}</p>
                        )}                       
                    </div>

                    <div id={styles["form-actions"]}>
                        <button id="action-save" className="btn" type="submit">                           
                            Save
                        </button>
                        <button
                            id="action-cancel"
                            className="btn"
                            type="button"
                            onClick={onCloseForm}
                        >
                            Cancel
                        </button>
                    </div>

                    {formErrors.total && (
                        <p className={styles["form-error"]}>{formErrors.total}</p>
                    )} 

                </form>
            </div>
        </div>
    );
};
