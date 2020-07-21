//Микросервис.
'use strict';
module.exports = function (role) {
    if (role === "2") {
        console.log("Роль подтверждена.")
        return true;
    } else {
        console.log("Роль не подтверждена.")
    }
}