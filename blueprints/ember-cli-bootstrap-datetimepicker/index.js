module.exports = {
  description: '',

  normalizeEntityName: function() {},

  afterInstall: function(options) {
    /* Use custom build until bugs are fixed
      https://github.com/Eonasdan/bootstrap-datetimepicker/issues/1778
      https://github.com/Eonasdan/bootstrap-datetimepicker/issues/1783
    */
    return this.addPackagesToProject([
      { name: 'ember-cli-moment-shim', target: '2.0.0' },
      { name: 'eonasdan-bootstrap-datetimepicker-npm', target: '4.17.37' },
      { name: 'moment', target: '^2.15.0' },
      { name: 'moment-timezone', target: '^0.5.5' }
    ]);
  }
};
