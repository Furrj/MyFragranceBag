import { T_UserData, initUserData } from "./UserData";

export type T_APIUserDataResponse = {
    valid: boolean;
    user_data: T_UserData;
    session_key: string;
};

export const initApiUserDataResponse: T_APIUserDataResponse = {
    valid: false,
    user_data: { ...initUserData },
    session_key: "",
};
