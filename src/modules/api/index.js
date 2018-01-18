/**
 * Created by Marcin on 17.01.2017.
 */

export const loginServiceEndpoints = {
    NEW_USER: "newUser",
    GET_USER: 'getUserBundle',
    LOGIN: "login",
    IDENTITY: "identity",
    QUESTIONS_ANSWERS: "qa",
    RECOVER_PASSWORD: "recoverPassword",
    CONSOLIDATE_LOAN: "consolidateLoan",

};

export const addrServiceEndpoints = {
    ADDRESS_LIST: "addressList",
};

export const addrServiceHost = "wss://demo.creditswift.co.uk:8082/addr";
export const loginServiceHost = "wss://demo.creditswift.co.uk:8082/ws";

export const sessionHandlerAlias = "loggedInSessionAlias";