import React from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

// TS
import { initUserData, T_UserData } from "../types/UserData.ts";

interface IProps {
    setUserData: React.Dispatch<React.SetStateAction<T_UserData>>;
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const LogoutBtn: React.FC<IProps> = ({ setUserData, setLoggedIn }) => {
    const navigate: NavigateFunction = useNavigate();

    function logout(): void {
        localStorage.clear();
        setUserData(initUserData);
        setLoggedIn(false);
        navigate("/login");
        return;
    }

    return <button onClick={logout}>Logout</button>;
};

export default LogoutBtn;
