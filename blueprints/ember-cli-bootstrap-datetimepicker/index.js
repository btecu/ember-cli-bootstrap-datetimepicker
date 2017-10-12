/* eslint-env node */
'use strict';

module.exports = {
  description: '',

  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addPackagesToProject([
      { name: 'ember-cli-moment-shim', target: '3.5.0' },
      { name: 'moment', target: '^2.19.1' },
      { name: 'moment-timezone', target: '^0.5.13' }
    ]);
  }
};
