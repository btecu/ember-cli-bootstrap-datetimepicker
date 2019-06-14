/* eslint-env node */
'use strict';

module.exports = {
  normalizeEntityName() {},

  afterInstall() {
    return this.addPackagesToProject([
      { name: 'ember-cli-moment-shim', target: '3.7.1' },
      { name: 'moment', target: '^2.24.0' },
      { name: 'moment-timezone', target: '^0.5.25' }
    ]);
  }
};
