'use strict';

const controller = require('./controller');

module.exports = function(app) {
    app.route('/info')
        .get(controller.info);
}
