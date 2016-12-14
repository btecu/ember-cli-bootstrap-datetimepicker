/*jshint node:true*/
'use strict';

module.exports = function(environment, appSettings) {
  let moment = appSettings.moment || {};
  let { includeLocales = false } = moment;

  return {
    moment: {
      includeLocales
    }
  };
};
