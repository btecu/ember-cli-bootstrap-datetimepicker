/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-cli-bootstrap-datetimepicker',

  included() {
    this._super.included(...arguments);

    // Import unminified css and js
    let basePath = 'node_modules/eonasdan-bootstrap-datetimepicker';
    this.import(`${basePath}/build/css/bootstrap-datetimepicker.css`);
    this.import(`${basePath}/src/js/bootstrap-datetimepicker.js`);
  }
};
