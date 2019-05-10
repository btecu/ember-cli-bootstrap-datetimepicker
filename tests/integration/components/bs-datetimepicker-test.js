import $ from 'jquery';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, focus } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | bs datetimepicker', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders basic input', async function(assert) {
    assert.expect(1);

    await render(hbs`{{bs-datetimepicker date='2016-01-01'}}`);
    assert.dom('input').hasValue('01/01/2016 12:00 AM');
  });

  test('it renders with default icon classes', async function(assert) {
    assert.expect(1);

    await render(hbs`{{bs-datetimepicker date='2016-01-01'}}`);
    assert.dom('.input-group-addon i').hasAttribute('class', 'glyphicon glyphicon-calendar');
  });

  test('it renders calendar and time icon classes based on isTime argument', async function(assert) {
    assert.expect(2);

    this.set('isTime', false);

    await render(hbs`{{bs-datetimepicker date='2016-01-01' isTime=isTime}}`);
    assert.dom('.input-group-addon i').hasAttribute('class', 'glyphicon glyphicon-calendar');
    this.set('isTime', true);
    assert.dom('.input-group-addon i').hasAttribute('class', 'glyphicon glyphicon-time');
  });

  test('changing the value will trigger change action', async function(assert) {
    assert.expect(1);

    const done = assert.async();
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
});
