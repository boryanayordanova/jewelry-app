import styles from "./LoginPage.module.scss";

export const LoginPage = () => {
    return (
        <>
            <h1>Login:</h1>

            <form className={styles["user-register-form"]}>


                <div className={styles["form-group"]}>
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        name="email"
                        type="text"
                        placeholder="Enter User Emain..."
                    />
                    {/* {formErrors.color &&
                            <p className="form-error">
                                {formErrors.color}
                            </p>
                        } */}
                </div>


                <div className={styles["form-group"]}>
                    <label htmlFor="color">Password:</label>
                    <input
                        id="color"
                        name="color"
                        type="password"
                        placeholder="Password..."
                    />
                    {/* {formErrors.color &&
                            <p className="form-error">
                                {formErrors.color}
                            </p>
                        } */}
                </div>


                <div id={styles["form-actions"]}>
                    <button id="action-save" className="btn" type="submit">
                        {" "}
                        Login{" "}
                    </button>
             
                </div>
            </form>
        </>
    );
};
