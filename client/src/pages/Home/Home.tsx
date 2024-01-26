import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

// Comps
import LogoutBtn from "../../ui/LogoutBtn";

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
        <div id="home_main_container">
            {validationCompleted ? (
                <div>
                    <h1>HOME</h1>
                    <LogoutBtn
                        setUserData={setUserData}
                        setLoggedIn={setLoggedIn}
                    />
                </div>
            ) : (
                <h1>Loading...</h1>
            )}
        </div>
    );
};

export default Home;
