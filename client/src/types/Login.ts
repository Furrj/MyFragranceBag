import { T_UserData, initUserData } from "./UserData.ts";

export type T_UserInput_Login = {
    username: string;
    password: string;
};

export const initUserInputLogin: T_UserInput_Login = {
    username: "",
    password: "",
};

// Result from Requests/attemptLogin
export type T_LoginResult = {
    valid: boolean;
    user_data: T_UserData;
    session_key: string;
    error: boolean;
};

export const initLoginResult: T_LoginResult = {
    valid: false,
    error: false,
    user_data: { ...initUserData },
    session_key: "",
};
