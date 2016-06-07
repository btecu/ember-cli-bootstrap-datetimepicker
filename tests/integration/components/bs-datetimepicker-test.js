import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bs-datetimepicker', 'Integration | Component | bs datetimepicker', {
  integration: true
});

test('it renders iconClasses and iconText', function(assert) {
  assert.expect(2);

  this.render(hbs`{{bs-datetimepicker date='01/01/2016' iconClasses='material-icons' iconText='date-range'}}`);

  assert.equal(this.$('.input-group-addon i').attr('class'), 'material-icons');
  assert.equal(this.$('.input-group-addon i').text().trim(), 'date-range');
});

test('it renders with default icon classes', function(assert) {
  assert.expect(1);

  this.render(hbs`{{bs-datetimepicker date='01/01/2016'}}`);

  assert.equal(this.$('.input-group-addon i').attr('class'), 'glyphicon glyphicon-calendar');
});
