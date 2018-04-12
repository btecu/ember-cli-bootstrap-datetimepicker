'use strict';

module.exports = function(environment, appConfig) {
  let moment = appConfig.moment || {};
  let includeLocales = moment.includeLocales || false;

  return {
    moment: {
      includeLocales
    }
  };
};
