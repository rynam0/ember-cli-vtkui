import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('g-grid-heading', 'Integration | Component | g grid heading', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"
  this.render(hbs`{{g-grid-heading}}`);
  assert.equal(this.$().text().trim(), '');
});
