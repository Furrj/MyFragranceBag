import React from "react";

// TS
import { initUserData, T_UserData } from "../types/UserData.ts";

interface IProps {
    setUserData: React.Dispatch<React.SetStateAction<T_UserData>>;
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const LogoutBtn: React.FC<IProps> = ({ setUserData, setLoggedIn }) => {
    function logout(): void {
        localStorage.clear();
        setUserData(initUserData);
        setLoggedIn(false);
        return;
    }

    return <button onClick={logout}>Logout</button>;
};

export default LogoutBtn;
