/**
 * Created by Marcin on 18.01.2017.
 */

//var js4k = require('../../../external_js/js4k.js');
import { sessionHandlerAlias } from "./index";

export default class WSConnectionProvider {
    static connectionContainer = [];

    static getConnection(connString) {
        var connectionContainer = WSConnectionProvider.connectionContainer;
        // debugger;
        return new Promise(function(resolve, reject) {
            var foundConnection = null;
            for (var i = 0; i < connectionContainer.length; i++) {
                if (connectionContainer[i].hasOwnProperty("connLabel")) {
                    if (connectionContainer[i].connLabel === connString) {
                        foundConnection = connectionContainer[i].connHandler;
                    }
                }
            }
            if (foundConnection === null) {
                var errCB = function(err) { console.error(err); };
                //debugger;

                
            } else {
                //debugger;
                if (foundConnection.socketHolder.socket.socket.readyState === foundConnection.socketHolder.socket.socket.CLOSED) {
                    
                } else {
                    resolve(foundConnection);
                }
            }
        });
    }
}