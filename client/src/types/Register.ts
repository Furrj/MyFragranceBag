import { T_UserData, initUserData } from "./UserData.ts";

export type T_UserInput_Register = {
    username: string;
    password: string;
    password2: string;
    first_name: string;
    last_name: string;
};

export const initUserInputRegister: T_UserInput_Register = {
    username: "",
    password: "",
    password2: "",
    first_name: "",
    last_name: "",
};

// Result from Requests/attemptRegister
export type T_RegisterResult = {
    valid: boolean;
    user_data: T_UserData;
    session_key: string;
    error: boolean;
};

export const initRegisterResult: T_RegisterResult = {
    valid: false,
    error: false,
    user_data: { ...initUserData },
    session_key: "",
};
