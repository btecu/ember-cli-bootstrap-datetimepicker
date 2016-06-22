import EmberCliBootstrapDateTimePicker from 'ember-cli-bootstrap-datetimepicker/components/bs-datetimepicker';
import ENV from '../config/environment';
const config = ENV['ember-cli-bootstrap-datetimepicker'] || {};

export default EmberCliBootstrapDateTimePicker.extend({
  config: {
    icons: {
      up: config.iconUp,
      down: config.iconDown,
      date: config.iconDate,
      time: config.iconTime,
      next: config.iconNext,
      previous: config.iconPrevious,
      today: config.iconToday,
      clear: config.iconClear,
      close: config.iconClose
    }
  }
});
