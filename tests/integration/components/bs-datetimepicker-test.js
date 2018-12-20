import { module, test, todo } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | bs datetimepicker', function(hooks) {
  setupRenderingTest(hooks);

  todo('it renders iconClasses and iconText', async function(assert) {
    assert.expect(2);

    await render(hbs`{{bs-datetimepicker date='2016-01-01' iconClasses='material-icons' iconText='date-range'}}`);

    assert.dom('.input-group-addon i').hasAttribute('class', 'material-icons');
    assert.dom('.input-group-addon i').hasText('date-range');
  });

  test('it renders with default icon classes', async function(assert) {
    assert.expect(1);

    await render(hbs`{{bs-datetimepicker date='2016-01-01'}}`);

    assert.dom('.input-group-addon i').hasAttribute('class', 'glyphicon glyphicon-calendar');
  });
});
