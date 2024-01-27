import React, { useEffect } from "react";
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
    return (
        <Protected
            validationCompleted={validationCompleted}
            loggedIn={loggedIn}
        >
            <>
                <h1>My Fragances</h1>
                <LogoutBtn
                    setUserData={setUserData}
                    setLoggedIn={setLoggedIn}
                />
                <div className={styles.test}></div>
            </>
        </Protected>
    );
};

export default Home;
