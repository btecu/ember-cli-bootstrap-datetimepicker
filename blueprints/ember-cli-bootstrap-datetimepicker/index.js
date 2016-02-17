module.exports = {
  description: '',

  normalizeEntityName: function() {},

  afterInstall: function(options) {
    /* Use custom build until official is published
      https://github.com/Eonasdan/bootstrap-datetimepicker/issues/1438
    */
    return this.addPackagesToProject([
      { name: 'ember-cli-moment-shim', target: '1.0.0' },
      { name: 'eonasdan-bootstrap-datetimepicker-ie ', target: '4.17.42' }
    ]);
  }
};
