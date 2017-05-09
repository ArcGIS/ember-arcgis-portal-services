import { moduleFor, test } from 'ember-qunit';

moduleFor('service:user-service', 'Unit | Service | user service', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

// Replace this with your real tests.
test('it serializes tags', function (assert) {
  const service = this.subject();
  const user = {
    username: 'tomwayson',
    tags: ['test', 'test1']
  };
  assert.equal(service._serializeUser(user).tags, user.tags.join(', '), 'should return comma delimited list');
  user.tags = [];
  assert.equal(service._serializeUser(user).tags, 'user', 'should return default tag for empty array');
});
