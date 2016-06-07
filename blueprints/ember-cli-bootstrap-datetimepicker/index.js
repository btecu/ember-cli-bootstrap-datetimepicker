module.exports = {
  description: '',

  normalizeEntityName: function() {},

  afterInstall: function(options) {
    /* Use custom build until official is published
      https://github.com/Eonasdan/bootstrap-datetimepicker/issues/1438
    */
    return this.addPackagesToProject([
      { name: 'ember-cli-moment-shim', target: '1.3.0' },
      { name: 'eonasdan-bootstrap-datetimepicker-npm', target: '4.17.37' },
      { name: 'moment', target: '^2.13.0' },
      { name: 'moment-timezone', target: '^0.5.4' }
    ]);
  }
};
