import { T_UserData, initUserData } from "./UserData";
import { T_StudentData, initStudentData } from "./UserData";
import { T_TeacherData, initTeacherData } from "./UserData";

export type T_ValidateResult = {
    valid: boolean;
    user_data: T_UserData;
    student_data: T_StudentData;
    teacher_data: T_TeacherData;
    error: boolean;
    session_key: string;
};

export const initValidateResult: T_ValidateResult = {
    valid: false,
    error: false,
    user_data: { ...initUserData },
    student_data: { ...initStudentData },
    teacher_data: { ...initTeacherData },
    session_key: "",
};
