import Ember from 'ember';
import layout from '../templates/components/bs-datetimepicker';

const {
  $,
  Component,
  computed
} = Ember;

const {
  defaults
} = $.fn.datetimepicker;

export default Component.extend({
  layout,
  tagName: 'div',
  classNames: ['input-group date'],
  placeholder: '',

  openOnFocus: false,

  iconClasses: computed('isTime', function() {
    if (this.get('isTime')) {
      return this.getWithDefault('config.icons.time', defaults.icons.time);
    }

    return this.getWithDefault('config.icons.date', defaults.icons.date);
  }),

  didInsertElement() {
    this._super(...arguments);

    let icons = {
      clear: this.getWithDefault('config.icons.clear', defaults.icons.clear),
      close: this.getWithDefault('config.icons.close', defaults.icons.close),
      date: this.getWithDefault('config.icons.date', defaults.icons.date),
      down: this.getWithDefault('config.icons.down', defaults.icons.down),
      next: this.getWithDefault('config.icons.next', defaults.icons.next),
      previous: this.getWithDefault('config.icons.previous', defaults.icons.previous),
      time: this.getWithDefault('config.icons.time', defaults.icons.time),
      today: this.getWithDefault('config.icons.today', defaults.icons.today),
      up: this.getWithDefault('config.icons.up', defaults.icons.up)
    };

    this.$().datetimepicker({
      date: this.getWithDefault('date', defaults.defaultDate),
      daysOfWeekDisabled: this.getWithDefault('daysOfWeekDisabled', defaults.daysOfWeekDisabled),
      disabledDates: this.getWithDefault('disabledDates', defaults.disabledDates),
      disabledHours: this.getWithDefault('disabledHours', defaults.disabledHours),
      enabledDates: this.getWithDefault('enabledDates', defaults.enabledDates),
      enabledHours: this.getWithDefault('enabledHours', defaults.enabledHours),
      focusOnShow: this.getWithDefault('focusOnShow', defaults.focusOnShow),
      format: this.getWithDefault('format', defaults.format),
      icons,
      locale: this.getWithDefault('locale', defaults.locale),
      maxDate: this.getWithDefault('maxDate', defaults.maxDate),
      minDate: this.getWithDefault('minDate', defaults.minDate),
      showClear: this.getWithDefault('showClear', defaults.showClear),
      showClose: this.getWithDefault('showClose', defaults.showClose),
      showTodayButton: this.getWithDefault('showTodayButton', defaults.showTodayButton),
      sideBySide: this.getWithDefault('sideBySide', defaults.sideBySide),
      useCurrent: this.getWithDefault('useCurrent', false),
      viewDate: this.getWithDefault('viewDate', defaults.viewDate),
      viewMode: this.getWithDefault('viewMode', defaults.viewMode),
      widgetPositioning: this.getWithDefault('widgetPositioning', defaults.widgetPositioning)
    }).on('dp.change', e => {
      // Convert moment to js date or default to null
      let newDate = e.date && e.date.toDate() || null;

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
  },

  willDestroyElement() {
    this._super(...arguments);
    this.removeObserver('date');
    this.removeObserver('maxDate');
    this.removeObserver('minDate');

    // Running the `ember` application embedded might cause the DOM to be cleaned before
    let dateTimePicker = this.$().data('DateTimePicker');
    if (dateTimePicker) {
      dateTimePicker.destroy();
    }
  },

  actions: {
    focus() {
      if (this.get('openOnFocus')) {
        this.$().data('DateTimePicker').show();
      }
    }
  }
});
