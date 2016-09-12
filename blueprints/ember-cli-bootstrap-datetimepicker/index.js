module.exports = {
  description: '',

  normalizeEntityName: function() {},

  afterInstall: function(options) {
    return this.addPackagesToProject([
      { name: 'ember-cli-moment-shim', target: '2.0.0' },
      { name: 'eonasdan-bootstrap-datetimepicker', target: '4.17.42' },
      { name: 'moment', target: '^2.15.0' },
      { name: 'moment-timezone', target: '^0.5.5' }
    ]);
  }
};
