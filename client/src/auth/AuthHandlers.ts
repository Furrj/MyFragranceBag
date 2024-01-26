import { checkForSessionInfo, getSessionInfoFromStorage } from "./Storage";
import { validateSession } from "../utils/Requests";
import { T_ValidateResult, initValidateResult } from "../types/Validate";

export async function checkValidSession(): Promise<T_ValidateResult> {
    const invalidResult: T_ValidateResult = { ...initValidateResult };

    if (!checkForSessionInfo()) return invalidResult;

    try {
        return await validateSession(getSessionInfoFromStorage());
    } catch (err: any) {
        throw new Error(err);
    }
}
