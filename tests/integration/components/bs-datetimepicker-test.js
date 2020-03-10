import $ from 'jquery';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, focus } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | bs datetimepicker', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders basic input', async function(assert) {
    assert.expect(1);

    await render(hbs`{{bs-datetimepicker date="2016-01-01"}}`);
    assert.dom('input').hasValue('01/01/2016 12:00 AM');
  });

  test('it renders with default icon classes', async function(assert) {
    assert.expect(1);

    await render(hbs`{{bs-datetimepicker date="2016-01-01"}}`);
    assert.dom('.input-group-addon i').hasAttribute('class', 'glyphicon glyphicon-calendar');
  });

  test('it renders calendar and time icon classes based on isTime argument', async function(assert) {
    assert.expect(2);

    this.set('isTime', false);

    await render(hbs`{{bs-datetimepicker date="2016-01-01" isTime=isTime}}`);
    assert.dom('.input-group-addon i').hasAttribute('class', 'glyphicon glyphicon-calendar');
    this.set('isTime', true);
    assert.dom('.input-group-addon i').hasAttribute('class', 'glyphicon glyphicon-time');
  });

  test('changing the value will trigger change action', async function(assert) {
    assert.expect(1);

    let done = assert.async();
    this.set('callback', date => {
      assert.equal(date.toISOString(), '2016-01-01T00:00:00.000Z');
      done();
    });

    await render(hbs`{{bs-datetimepicker date="1970-01-01" change=callback}}`);

    // Set a new Date to trigger the dp.change event
    $('.input-group.date', this.element)
      .data('DateTimePicker')
      .date(new Date('2016-01-01'));
  });

  test('opens picker on focus when openOnFocus is enabled', async function(assert) {
    assert.expect(1);

    await render(hbs`{{bs-datetimepicker date="1970-01-01" openOnFocus=true}}`);
    await focus('input');
    assert.dom('.bootstrap-datetimepicker-widget').exists('picker should be shown');
  });

  test('disabled dates are disabled', async function(assert) {
    assert.expect(4);

    this.set('disabledDates', ['2016-01-02', '2016-01-03']);
    await render(hbs`{{bs-datetimepicker date="2016-01-01" disabledDates=disabledDates openOnFocus=true}}`);
    assert.dom('input').hasValue('01/01/2016 12:00 AM');

    await focus('input');
    assert.dom("td[data-day='01/02/2016']").hasClass('disabled', 'has disabled class');
    assert.dom("td[data-day='01/03/2016']").hasClass('disabled', 'has disabled class');
    await blur('input');

    // Datetimepicker requires disabledDates array to be of type `date`
    this.set('disabledDates', [
      new Date('1/2/2016'),
      new Date('1/3/2016'),
      new Date('1/4/2016'),
    ]);

    await focus('input');
    assert.dom("td[data-day='01/04/2016']").hasClass('disabled', 'has disabled class');
  });

  test('it passes through localized tooltips', async function(assert) {
    const tooltips = {
      clear: 'Localized Clear',
      close: 'Localized Close the picker',
      selectMonth: 'Localized Select Month',
      prevMonth: 'Localized Previous Month',
      nextMonth: 'Localized Next Month',
      selectYear: 'Localized Select Year',
      prevYear: 'Localized Previous Year',
      nextYear: 'Localized Next Year',
      selectDecade: 'Localized Select Decade',
      prevDecade: 'Localized Previous Decade',
      nextDecade: 'Localized Next Decade',
      prevCentury: 'Localized Previous Century',
      nextCentury: 'Localized Next Century',
      pickHour: 'Localized Pick Hour',
      incrementHour: 'Localized Increment Hour',
      decrementHour: 'Localized Decrement Hour',
      pickMinute: 'Localized Pick Minute',
      incrementMinute: 'Localized Increment Minute',
      decrementMinute: 'Localized Decrement Minute',
      pickSecond: 'Localized Pick Second',
      incrementSecond: 'Localized Increment Second',
      decrementSecond: 'Localized Decrement Second',
      togglePeriod: 'Localized Toggle Period',
      selectTime: 'Localized Select Time'
    };

    this.set('tooltips', tooltips);

    await render(hbs`{{bs-datetimepicker locale='es' openOnFocus='true' tooltips=tooltips}}`);
    await focus('input');

    const $prevButtons = $('.datepicker .prev > span');
    const $nextButtons = $('.datepicker .next > span');
    const $datePicker = $('.datepicker .picker-switch');
    const $selectTime = $('.picker-switch a');
    const $modifyTime = $('.timepicker-picker a');
    const $timepickerHour= $('span.timepicker-hour');
    const $timepickerMinute = $('span.timepicker-minute');
    const $togglePeriod = $('.timepicker-picker button');

    assert.equal(tooltips.selectTime, $selectTime.attr('title'), 'The select time tooltip is set');

    assert.equal(tooltips.incrementHour, $modifyTime[0].title, 'Increment hour is set');
    assert.equal(tooltips.incrementMinute, $modifyTime[1].title, 'Increment minute is set');
    assert.equal(tooltips.decrementHour, $modifyTime[2].title, 'Decrement hour is set');
    assert.equal(tooltips.decrementMinute, $modifyTime[3].title, 'Decrement minute is set');

    assert.equal(tooltips.togglePeriod, $togglePeriod.attr('title'), 'The toggle period tooltip is set');
    assert.equal(tooltips.pickHour, $timepickerHour.attr('title'), 'The hour picket tooltip is set');
    assert.equal(tooltips.pickMinute, $timepickerMinute.attr('title'), 'The minute picket tooltip is set');

    assert.equal(tooltips.prevMonth, $prevButtons[0].title, 'The previous month tooltip was set');
    assert.equal(tooltips.prevYear, $prevButtons[1].title, 'The previous year tooltip was set');
    assert.equal(tooltips.prevDecade, $prevButtons[2].title, 'The previous decade tooltip was set');
    assert.equal(tooltips.prevCentury, $prevButtons[3].title, 'The revious century tooltip was set');

    assert.equal(tooltips.nextMonth, $nextButtons[0].title, 'The next month tooltip was set');
    assert.equal(tooltips.nextYear, $nextButtons[1].title, 'The next year tooltip was set');
    assert.equal(tooltips.nextDecade, $nextButtons[2].title, 'The next decade tooltip was set');
    assert.equal(tooltips.nextCentury, $nextButtons[3].title, 'The next century tooltip was set');

    assert.equal(tooltips.selectMonth, $datePicker[0].title, 'The previous month tooltip was set');
    assert.equal(tooltips.selectYear, $datePicker[1].title, 'The previous year tooltip was set');
    assert.equal(tooltips.selectDecade, $datePicker[2].title, 'The previous decade tooltip was set');
  })
});
