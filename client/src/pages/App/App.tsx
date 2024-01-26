import React, { useEffect, useState } from "react";
import { NavigateFunction, Route, Routes, useNavigate } from "react-router-dom";
import styles from "./App.module.scss";

// COMPONENTS
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Navbar from "../../ui/Navbar/Navbar";

// TS
import { initUserData, T_UserData } from "../../types/UserData.ts";
import { T_ValidateResult, initValidateResult } from "../../types/Validate.ts";

// Auth
import { checkValidSession } from "../../auth/AuthHandlers";

// STORAGE
import { getSessionInfoFromStorage } from "../../auth/Storage";
import { getUserDataFromAPIResponse } from "../../utils/DataHandlers.ts";

const App: React.FC = () => {
    const [userData, setUserData] = useState<T_UserData>({ ...initUserData });
    const [loggedIn, setLoggedIn] = useState<boolean>(false);
    const [validationCompleted, setValidationCompleted] =
        useState<boolean>(false);
    const [verticalMode, setVerticalMode] = useState<boolean>(false);

    const navigate: NavigateFunction = useNavigate();

    // Subscribe window to handleResize on resize
    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
    }, []);

    // Validation check
    useEffect(() => {
        if (!loggedIn) {
            handleValidation();
        }
    }, []);

    async function handleValidation(): Promise<void> {
        let validateResult: T_ValidateResult = { ...initValidateResult };

        try {
            validateResult = { ...(await checkValidSession()) };
        } catch (err: any) {
            console.log(`ERROR: ${err}`);
        }

        setValidationCompleted(true);

        if (validateResult.valid) {
            setLoggedIn(true);
            setUserData(getUserDataFromAPIResponse(validateResult));
        } else {
            navigate("/login");
        }
    }

    function handleResize(): void {
        if (window.innerWidth <= 800) {
            setVerticalMode(true);
            return;
        }

        if (window.innerWidth > 800) {
            setVerticalMode(false);
            return;
        }
    }

    return (
        <div className={styles.root}>
            {!verticalMode && (
                <Navbar
                    loggedIn={loggedIn}
                    userData={userData}
                    verticalMode={verticalMode}
                />
            )}
            <div className={styles.appGridWrapper}>
                <div className={styles.spacer} />

                <div className={styles.appCont}>
                    {validationCompleted ? (
                        <Routes>
                            <Route
                                path="/login"
                                element={
                                    <Login
                                        setUserData={setUserData}
                                        setLoggedIn={setLoggedIn}
                                        setValidationCompleted={
                                            setValidationCompleted
                                        }
                                    />
                                }
                            />
                            <Route
                                path="/register"
                                element={
                                    <Register
                                        setUserData={setUserData}
                                        setLoggedIn={setLoggedIn}
                                        setValidationCompleted={
                                            setValidationCompleted
                                        }
                                    />
                                }
                            />
                            <Route
                                path="/"
                                element={
                                    <Home
                                        loggedIn={loggedIn}
                                        validationCompleted={
                                            validationCompleted
                                        }
                                        setUserData={setUserData}
                                        setLoggedIn={setLoggedIn}
                                    />
                                }
                            />
                        </Routes>
                    ) : (
                        <h1>Loading...</h1>
                    )}
                </div>

                <div className={styles.spacer} />
            </div>
            {verticalMode && (
                <Navbar
                    loggedIn={loggedIn}
                    userData={userData}
                    verticalMode={verticalMode}
                />
            )}
        </div>
    );
};

export default App;
