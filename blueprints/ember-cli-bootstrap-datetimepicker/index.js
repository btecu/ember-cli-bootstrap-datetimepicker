module.exports = {
  description: '',

  normalizeEntityName: function() {},

  afterInstall: function(options) {
    /* Use custom build until official is published
      https://github.com/Eonasdan/bootstrap-datetimepicker/issues/1438
    */
    return this.addPackagesToProject([
      { name: 'ember-cli-moment-shim', target: '1.0.0' },
      { name: 'eonasdan-bootstrap-datetimepicker-ie ', target: '4.17.42' },
      { name: 'moment', target: '^2.11.2' },
      { name: 'moment-timezone', target: '^0.5.0' }
    ]);
  }
};
