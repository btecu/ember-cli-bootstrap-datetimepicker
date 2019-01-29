'use strict';

module.exports = function(_, appConfig) {
  let moment = appConfig.moment || {};
  let includeLocales = moment.includeLocales || false;

  return {
    moment: {
      includeLocales
    }
  };
};
