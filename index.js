/* jshint node: true */
'use strict';

const Funnel = require('broccoli-funnel');
const path = require('path');
const mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-bootstrap-datetimepicker',

  included: function(app) {
    this._super.included(app);

    // Import unminified css and js
    let basePath = `${this.treePaths.vendor}/eonasdan-bootstrap-datetimepicker`;
    app.import(`${basePath}/build/css/bootstrap-datetimepicker.css`);
    app.import(`${basePath}/src/js/bootstrap-datetimepicker.js`);
  },

  treeForVendor: function(vendorTree) {
    let trees = [];

    if (vendorTree) {
      trees.push(vendorTree);
    }

    let datetimepickerJs = require.resolve('eonasdan-bootstrap-datetimepicker');
    let datetimepickerPath = path.join(path.dirname(datetimepickerJs), '../../');
    trees.push(new Funnel(datetimepickerPath, {
      destDir: 'eonasdan-bootstrap-datetimepicker',
      include: ['build/css/bootstrap-datetimepicker.css', 'src/js/bootstrap-datetimepicker.js']
    }));

    return mergeTrees(trees);
  }
};
