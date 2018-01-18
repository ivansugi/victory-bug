import {loginServiceEndpoints} from "./index";
/**
 * Created by Marcin on 30.01.2017.
 */
export default class SessionProvider {
    static sessionContainer = null;

    static getSession() {
        return SessionProvider.sessionContainer
    }

    static setSession(session) {
        SessionProvider.sessionContainer = session;
    }

    static loginUser(app, login, password) {
        return new Promise(function (success, deny) {
            app.ask(
                loginServiceEndpoints.LOGIN,
                login,
                password
            ).then(function (session, err) {
                if (err) {
                    return deny(err);
                }
                //debugger;
                SessionProvider.setSession(session);
                return success(SessionProvider.getSession());
            })
        });
    }
}