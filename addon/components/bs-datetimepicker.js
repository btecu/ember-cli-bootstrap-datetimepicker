import $ from 'jquery';
import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/bs-datetimepicker';
import DynamicAttributeBindings from '../-private/dynamic-attribute-bindings';

const {
  defaults
} = $.fn.datetimepicker;

export default Component.extend(DynamicAttributeBindings, {
  attributeBindings: null,
  layout,
  tagName: 'div',
  classNames: ['input-group date'],
  placeholder: '',
  openOnFocus: false,
  isMobile: /Android|iPhone|iPod|Windows Phone/i.test(navigator.userAgent),
  showIcon: true,

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

    $(this.element).datetimepicker({
      allowInputToggle: this.getWithDefault('allowInputToggle', defaults.allowInputToggle),
      calendarWeeks: this.getWithDefault('calendarWeeks', defaults.calendarWeeks),
      date: this.getWithDefault('date', null),
      daysOfWeekDisabled: this.getWithDefault('daysOfWeekDisabled', defaults.daysOfWeekDisabled),
      disabledDates: this.getWithDefault('disabledDates', defaults.disabledDates),
      disabledHours: this.getWithDefault('disabledHours', defaults.disabledHours),
      enabledDates: this.getWithDefault('enabledDates', defaults.enabledDates),
      enabledHours: this.getWithDefault('enabledHours', defaults.enabledHours),
      focusOnShow: this.getWithDefault('focusOnShow', defaults.focusOnShow),
      format: this.getWithDefault('format', defaults.format),
      extraFormats: this.getWithDefault('extraFormats', defaults.extraFormats),
      icons,
      ignoreReadonly: this.isMobile || defaults.ignoreReadonly,
      inline: this.getWithDefault('inline', defaults.inline),
      locale: this.getWithDefault('locale', defaults.locale),
      maxDate: this.getWithDefault('maxDate', defaults.maxDate),
      minDate: this.getWithDefault('minDate', defaults.minDate),
      showClear: this.getWithDefault('showClear', defaults.showClear),
      showClose: this.getWithDefault('showClose', defaults.showClose),
      showTodayButton: this.getWithDefault('showTodayButton', defaults.showTodayButton),
      sideBySide: this.getWithDefault('sideBySide', defaults.sideBySide),
      timeZone: this.getWithDefault('timeZone', defaults.timeZone),
      useCurrent: this.getWithDefault('useCurrent', false),
      viewDate: this.getWithDefault('viewDate', defaults.viewDate),
      viewMode: this.getWithDefault('viewMode', defaults.viewMode),
      widgetParent: this.getWithDefault('widgetParent', defaults.widgetParent),
      widgetPositioning: this.getWithDefault('widgetPositioning', defaults.widgetPositioning)
    }).on('dp.change', e => {
      // Convert moment to js date or default to null
      let newDate = e.date && e.date.toDate() || null;

      this.set('date', newDate);
      if (this.change) {
        this.change(newDate);
      }
    });

    this.addObserver('date', this, 'updateDate');
    this.addObserver('disabledDates', this, 'updateDisabledDates');
    this.addObserver('format', this, 'updateFormat');
    this.addObserver('locale', this, 'updateLocale');
    this.addObserver('maxDate', this, 'updateMaxDate');
    this.addObserver('minDate', this, 'updateMinDate');
    this.addObserver('timeZone', this, 'updateTimeZone');
    this.addObserver('viewMode', this, 'updateViewMode');
  },

  willDestroyElement() {
    this._super(...arguments);

    this.removeObserver('date', this, 'updateDate');
    this.removeObserver('disabledDates', this, 'updateDisabledDates');
    this.removeObserver('format', this, 'updateFormat');
    this.removeObserver('locale', this, 'updateLocale');
    this.removeObserver('maxDate', this, 'updateMaxDate');
    this.removeObserver('minDate', this, 'updateMinDate');
    this.removeObserver('timeZone', this, 'updateTimeZone');
    this.removeObserver('viewMode', this, 'updateViewMode');

    // Running the `ember` application embedded might cause the DOM to be cleaned before
    let dateTimePicker = this.picker();
    if (dateTimePicker) {
      dateTimePicker.destroy();
    }
  },

  actions: {
    focus() {
      if (this.get('openOnFocus')) {
        this.picker().show();
      }
    }
  },

  picker() {
    return $(this.element).data('DateTimePicker');
  },

  updateDate() {
    this.picker().date(this.getWithDefault('date', null));
  },

  updateDisabledDates() {
    this.picker().disabledDates(this.get('disabledDates'));
  },

  updateFormat() {
    this.picker().format(this.get('format'));
  },

  updateLocale() {
    this.picker().locale(this.get('locale'));
  },

  updateMaxDate() {
    this.picker().maxDate(this.get('maxDate'));
  },

  updateMinDate() {
    this.picker().minDate(this.get('minDate'));
  },

  updateTimeZone() {
    this.picker().timeZone(this.get('timeZone'));
  },

  updateViewMode() {
    this.picker().viewMode(this.get('viewMode'));
  }
});
