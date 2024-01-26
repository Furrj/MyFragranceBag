import axios, { HttpStatusCode } from "axios";

// TYPES
import { T_PostGameStats } from "../pages/Game/types";
import {
    T_LoginResult,
    T_UserInput_Login,
    initLoginResult,
} from "../types/Login.ts";
import {
    T_RegisterResult,
    T_UserInput_Register,
    initRegisterResult,
} from "../types/Register.ts";
import { T_UserData, T_UserSessionData } from "../types/UserData.ts";
import { T_ValidateResult, initValidateResult } from "../types/Validate.ts";

// Routes
const LOGIN_ROUTE: string = "/api/login";
const REGISTER_ROUTE: string = "/api/register";
const VALIDATE_ROUTE: string = "/api/validateSession";
const SUBMIT_RESULTS: string = "/api/testResult";

export async function attemptLogin(
    userInput: T_UserInput_Login
): Promise<T_LoginResult> {
    let loginResult: T_LoginResult = {
        ...initLoginResult,
    };

    try {
        const send = await axios({
            method: "POST",
            url: LOGIN_ROUTE,
            data: {
                ...userInput,
            },
        });

        if (send.status != HttpStatusCode.Ok) {
            loginResult.error = true;
        } else {
            if (send.data.valid) {
                loginResult = { ...send.data };
            }
        }
        return loginResult;
    } catch (err: any) {
        throw new Error(err);
    }
}

export async function attemptRegister(
    userInput: T_UserInput_Register
): Promise<T_RegisterResult> {
    let registerResult: T_RegisterResult = { ...initRegisterResult };

    try {
        const send = await axios({
            method: "POST",
            url: REGISTER_ROUTE,
            data: {
                username: userInput.username,
                password: userInput.password,
                first_name: userInput.first_name,
                last_name: userInput.last_name,
                teacher_id: userInput.teacher_id,
                period: userInput.period,
                role: "S",
            },
        });

        if (send.status != HttpStatusCode.Ok) {
            registerResult.error = true;
        } else {
            if (send.data.valid) {
                registerResult = { ...send.data };
            }
        }
        return registerResult;
    } catch (err: any) {
        throw new Error(err);
    }
}

export async function validateSession(
    sessionData: T_UserSessionData
): Promise<T_ValidateResult> {
    console.log("Running validateSession");
    console.log(sessionData);
    let validateResult: T_ValidateResult = { ...initValidateResult };

    try {
        const send = await axios({
            method: "POST",
            url: VALIDATE_ROUTE,
            data: {
                ...sessionData,
            },
        });

        if (send.status != HttpStatusCode.Ok) {
            validateResult.error = true;
        } else {
            if (send.data.valid) {
                validateResult = { ...send.data };
                validateResult.session_key = sessionData.session_key;
            }
        }
        return validateResult;
    } catch (err: any) {
        throw new Error(err);
    }
}

export async function sendPostGameStats(
    stats: T_PostGameStats,
    user_id: number
): Promise<void> {
    try {
        const sendObj = {
            user_id,
            ...stats,
        };

        const send = await axios({
            method: "POST",
            url: SUBMIT_RESULTS,
            data: {
                user_id,
                ...stats,
            },
        });

        if (send.status != HttpStatusCode.Ok) {
            console.log(send.status);
        } else {
            console.log(send.data);
        }
    } catch (err: any) {
        throw new Error(err);
    }
}
