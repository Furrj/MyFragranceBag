import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.scss";

// Comps
import LogoutBtn from "../../ui/LogoutBtn";
import Protected from "../../auth/Protected.tsx";

// TS
import { T_UserData } from "../../types/UserData.ts";

type IProps = {
    loggedIn: boolean;
    validationCompleted: boolean;
    setUserData: React.Dispatch<React.SetStateAction<T_UserData>>;
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

const Home: React.FC<IProps> = ({
    loggedIn,
    validationCompleted,
    setUserData,
    setLoggedIn,
}) => {
    const navigate = useNavigate();

    return (
        <Protected
            validationCompleted={validationCompleted}
            loggedIn={loggedIn}
        >
            <div id="home_main_container">
                {validationCompleted ? (
                    <div>
                        <h1>My Fragances</h1>
                        <LogoutBtn
                            setUserData={setUserData}
                            setLoggedIn={setLoggedIn}
                        />
                    </div>
                ) : (
                    <h1>Loading...</h1>
                )}
            </div>
        </Protected>
    );
};

export default Home;
