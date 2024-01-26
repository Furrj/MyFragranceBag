export type T_UserData = {
    user_id: number;
    username: string;
    first_name: string;
    last_name: string;
    session_key: string;
};

export const initUserData: T_UserData = {
    user_id: -1,
    username: "",
    first_name: "",
    last_name: "",
    session_key: "",
};

export type T_UserSessionData = {
    user_id: number;
    session_key: string;
};

export const initUserSessionData: T_UserSessionData = {
    user_id: 0,
    session_key: "uninitialized_session_key",
};
