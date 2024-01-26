import {
    T_UserData,
    initUserData,
    T_StudentData,
    initStudentData,
    T_TeacherData,
    initTeacherData,
} from "./UserData.ts";

export type T_UserInput_Register = {
    username: string;
    password: string;
    password2: string;
    first_name: string;
    last_name: string;
    teacher_id: number;
    period: number;
};

export const initUserInputRegister: T_UserInput_Register = {
    username: "",
    password: "",
    password2: "",
    first_name: "",
    last_name: "",
    teacher_id: -1,
    period: -1,
};

// Result from Requests/attemptRegister
export type T_RegisterResult = {
    valid: boolean;
    user_data: T_UserData;
    student_data: T_StudentData;
    teacher_data: T_TeacherData;
    session_key: string;
    error: boolean;
};

export const initRegisterResult: T_RegisterResult = {
    valid: false,
    error: false,
    user_data: { ...initUserData },
    student_data: { ...initStudentData },
    teacher_data: { ...initTeacherData },
    session_key: "",
};
