'use strict';
var properties = require('../service/data.json')
var controllers = {
    info: function(req, res) {
        var dataInfo = {
            date_expired: properties.date_expired,
            enable: properties.enable,
            enable_sftp: properties.enable_sftp,
            enable_soap: properties.enable_soap,
            enable_web: properties.enable_web,
            role: properties.role,
            id: properties.id,
            login: properties.login,
            name: properties.name,
            parent_organisation: properties.parent_organization.name,
            surname: properties.surname,
            pretend: f1(properties.role),

    }
        res.json(dataInfo);
        // pretend.func(req, res, function (err, pretend) {
        //     if (err)
        //         res.send(err);
        //      res.json(pretend);
//         })

        function f1(role) {
            if (role === "2") {
                return true;
                console.log("Роль подтверждена.")
            } else {
                console.log("Роль не подтверждена.")
            }
        }

    }

};

module.exports = controllers;