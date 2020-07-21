//Контроллер.
'use strict';
var properties = require('../service/data.json')
const pretend = require('../service/pretend.js')
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
            pretend: pretend(properties.role),
    }
        res.json(dataInfo);
    }
};
module.exports = controllers;