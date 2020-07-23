//Контроллер.
'use strict';
var properties = require('../service/data.json')
const pretend = require('../service/pretend.js')
var controllers = {
    info: function(req, res) {
        const arrayFIO = properties.surname.split(' '); //Массив для вывода ФИО в отдельных ключах.
        const dataInfo = { //Запись данных во пользователе в объект из файла data.json.
            date_expired: properties.date_expired,
            enable: properties.enable,
            enable_sftp: properties.enable_sftp,
            enable_soap: properties.enable_soap,
            enable_web: properties.enable_web,
            role: properties.role,
            id: properties.id,
            login: properties.login,
            name: properties.name,
            surname: arrayFIO[0],
            patronymic: arrayFIO[1],
            parent_organisation: properties.parent_organization.name,
            pretend: pretend(properties.role)
    }
        //Замена null на '-'.
        for (let key in dataInfo){
            if (dataInfo[key] === null){
                dataInfo[key] = "-";
            }
        }

         res.json(dataInfo); //Вывод преобразованных данных о пользователе.
    }
};
module.exports = controllers;