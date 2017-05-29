module.exports = {
  description: '',

  normalizeEntityName: function() {},

  afterInstall: function() {
    /* Use custom build until bugs are fixed
      https://github.com/Eonasdan/bootstrap-datetimepicker/issues/1778
      https://github.com/Eonasdan/bootstrap-datetimepicker/issues/1783
    */
    return this.addPackagesToProject([
      { name: 'ember-cli-moment-shim', target: '3.3.0' },
      { name: 'eonasdan-bootstrap-datetimepicker-npm', target: '4.17.42' },
      { name: 'moment', target: '^2.18.1' },
      { name: 'moment-timezone', target: '^0.5.13' }
    ]);
  }
};
