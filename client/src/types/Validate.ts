import { T_UserData, initUserData } from "./UserData";

export type T_ValidateResult = {
    valid: boolean;
    user_data: T_UserData;
    error: boolean;
    session_key: string;
};

export const initValidateResult: T_ValidateResult = {
    valid: false,
    error: false,
    user_data: { ...initUserData },
    session_key: "",
};
