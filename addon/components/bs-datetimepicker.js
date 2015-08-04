import Ember from 'ember';
import layout from '../templates/components/bs-datetimepicker';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'div',
  classNames: ['input-group date'],

  setupDatepicker: Ember.on('didInsertElement', function() {
    let defaults = Ember.$.fn.datetimepicker.defaults;

    this.$().datetimepicker({
      date: this.getWithDefault('date', defaults.defaultDate),
      focusOnShow: this.getWithDefault('focusOnShow', defaults.focusOnShow),
      format: this.getWithDefault('format', defaults.format),
      maxDate: this.getWithDefault('maxDate', defaults.maxDate),
      minDate: this.getWithDefault('minDate', defaults.minDate),
      showClear: this.getWithDefault('showClear', defaults.showClear),
      showClose: this.getWithDefault('showClose', defaults.showClose),
      showTodayButton: this.getWithDefault('showTodayButton', defaults.showTodayButton),
      viewMode: this.getWithDefault('viewMode', defaults.viewMode)
    }).on('dp.change', e => {
      // Convert moment to js date
      let newDate = e.date && e.date.toDate();

      this.set('date', newDate);
      this.sendAction('change', newDate);
    });

    this.addObserver('date', function() {
      this.$().data('DateTimePicker').date(this.get('date'));
    });

    this.addObserver('maxDate', function() {
      this.$().data('DateTimePicker').maxDate(this.get('maxDate'));
    });

    this.addObserver('minDate', function() {
      this.$().data('DateTimePicker').minDate(this.get('minDate'));
    });
  }),

  destroyDatepicker: Ember.on('willDestroyElement', function() {
    this.removeObserver('date');
    this.removeObserver('maxDate');
    this.removeObserver('minDate');

    this.$().data('DateTimePicker').destroy();
  })
});
