/* eslint-env node */
'use strict';

module.exports = {
  description: '',

  normalizeEntityName() {},

  afterInstall() {
    return this.addPackagesToProject([
      { name: 'ember-cli-moment-shim', target: '3.7.1' },
      { name: 'moment', target: '^2.22.2' },
      { name: 'moment-timezone', target: '^0.5.21' }
    ]);
  }
};
