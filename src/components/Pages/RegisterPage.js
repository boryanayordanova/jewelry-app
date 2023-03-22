import styles from "./RegisterPage.module.scss";

export const RegisterPage = () => {
    return (
        <>
            <article>
                <div className={styles["article-auth"]}>
                    <h1>Register:</h1>

                    <form className={styles["user-register-form"]}>
                        <div className={styles["form-group"]}>
                            <label htmlFor="email">Email:</label>
                            <input
                                id="email"
                                name="email"
                                type="text"
                                placeholder="Enter User Email..."
                            />
                            {/* {formErrors.color &&
                        <p className="form-error">
                            {formErrors.color}
                        </p>
                    } */}
                        </div>

                        <div className={styles["form-group"]}>
                            <label htmlFor="phone">Phone:</label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                placeholder="Phone..."
                            />
                            {/* {formErrors.color &&
                        <p className="form-error">
                            {formErrors.color}
                        </p>
                    } */}
                        </div>

                        <div className={styles["form-group"]}>
                            <label htmlFor="password">Password:</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Password..."
                            />
                            {/* {formErrors.color &&
                        <p className="form-error">
                            {formErrors.color}
                        </p>
                    } */}
                        </div>

                        <div className={styles["form-group"]}>
                            <label htmlFor="confirmPassword">
                                Confirm Password:
                            </label>
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                placeholder="Confirm Password..."
                            />
                            {/* {formErrors.color &&
                        <p className="form-error">
                            {formErrors.color}
                        </p>
                    } */}
                        </div>

                        <div className={styles["form-group"]}>
                            <label htmlFor="image">Image Url:</label>
                            {/* <input value={formValues.image} onChange={onChangeHandlerCreateuser} id="image" name="image" type="text" defaultValue={user?.image} placeholder="Place Image Here..." /> */}
                            <input
                                id="image"
                                name="image"
                                type="text"
                                placeholder="Place Image Here..."
                            />
                            {/* <p className="form-error">image is not valid!</p> */}
                        </div>

                        <div className={styles["form-actions"]}>
                            <button
                                id="action-save"
                                className="btn"
                                type="submit"
                            >
                                {" "}
                                Register{" "}
                            </button>
                        </div>
                    </form>
                </div>
            </article>
        </>
    );
};
