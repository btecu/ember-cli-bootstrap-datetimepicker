/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-cli-bootstrap-datetimepicker',

  included: function(app) {
    this._super.included(app);

    // Import moment.js
    app.import(path.join(app.bowerDirectory, '/moment/moment.js'));

    // Import unminified css and js
    app.import(path.join(app.bowerDirectory, '/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css'));
    app.import(path.join(app.bowerDirectory , '/eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker.js'));
  }
};
