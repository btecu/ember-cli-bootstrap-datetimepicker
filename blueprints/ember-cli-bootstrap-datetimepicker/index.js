module.exports = {
  description: '',

  normalizeEntityName: function() {},

  afterInstall: function(options) {
    var blueprint = this;

    return blueprint.addAddonToProject('ember-cli-moment-shim', '0.6.2').then(function() {
      return blueprint.addBowerPackageToProject('eonasdan-bootstrap-datetimepicker', '4.17.37');
    });
  }
};
