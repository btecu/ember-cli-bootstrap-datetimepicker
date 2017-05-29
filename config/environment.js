/* eslint-env node */
'use strict';

module.exports = function(environment, appSettings) {
  let moment = appSettings.moment || {};
  let includeLocales = moment.includeLocales || false;

  return {
    moment: {
      includeLocales
    }
  };
};
