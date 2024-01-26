import { T_UserData, initUserData } from "./UserData";
import { T_StudentData, initStudentData } from "./UserData";
import { T_TeacherData, initTeacherData } from "./UserData";

export type T_APIUserDataResponse = {
    valid: boolean;
    user_data: T_UserData;
    student_data: T_StudentData;
    teacher_data: T_TeacherData;
    session_key: string;
};

export const initApiUserDataResponse: T_APIUserDataResponse = {
    valid: false,
    user_data: { ...initUserData },
    student_data: { ...initStudentData },
    teacher_data: { ...initTeacherData },
    session_key: "",
};
