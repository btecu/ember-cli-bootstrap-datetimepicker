'use strict';

module.exports = {
  name: require('./package').name,

  included: function(app) {
    this._super.included(app);

    // Import unminified css and js
    let basePath = 'node_modules/eonasdan-bootstrap-datetimepicker';
    app.import(`${basePath}/build/css/bootstrap-datetimepicker.css`);
    app.import(`${basePath}/src/js/bootstrap-datetimepicker.js`);
  }
};
