export enum E_Role {
    Student = "S",
    Teacher = "T",
    Admin = "A",
    Error = "E",
}

export type T_UserSessionData = {
    user_id: number;
    session_key: string;
};

export const initUserSessionData: T_UserSessionData = {
    user_id: 0,
    session_key: "uninitialized_session_key",
};

export type T_UserData = {
    user_id: number;
    username: string;
    first_name: string;
    last_name: string;
    role: E_Role;
    session_key: string;
    student_data: T_StudentData;
    teacher_data: T_TeacherData;
};

export type T_StudentData = {
    teacher_id: number;
    period: number;
};

export const initStudentData: T_StudentData = {
    teacher_id: 0,
    period: 0,
};

export type T_TeacherData = {
    periods: number;
};

export const initTeacherData: T_TeacherData = {
    periods: 0,
};

export const initUserData: T_UserData = {
    user_id: -1,
    username: "",
    first_name: "",
    last_name: "",
    role: E_Role.Error,
    session_key: "",
    student_data: { ...initStudentData },
    teacher_data: { ...initTeacherData },
};
