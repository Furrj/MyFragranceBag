import { T_LoginResult } from "../types/Login";
import { T_RegisterResult } from "../types/Register";
import { T_UserData, initUserData } from "../types/UserData";
import { T_ValidateResult } from "../types/Validate";

export function getUserDataFromAPIResponse(
    response: T_LoginResult | T_RegisterResult | T_ValidateResult
): T_UserData {
    const userData: T_UserData = { ...initUserData };

    // Basic
    userData.user_id = response.user_data.user_id;
    userData.username = response.user_data.username;
    userData.first_name = response.user_data.first_name;
    userData.last_name = response.user_data.last_name;
    userData.session_key = response.session_key;

    return userData;
}
