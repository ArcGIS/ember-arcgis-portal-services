import Ember from 'ember';

export default Ember.Route.extend({
  itemsService: Ember.inject.service('items-service'),
  model (params) {
    let item = this.modelFor('items.item');
    Ember.debug('Items.item.edit id: ' + params.id + ' item.id ' + item.id + JSON.stringify(params));

    // only get the data if this is a type with data!
    let validTypes = ['Web Mapping Application', 'Web Map', 'Dashboard', 'Hub Site Application', 'Hub Page', 'Hub Initiative', 'Map Service'];
    if (validTypes.includes(item.type)) {
      return Ember.RSVP.hash({
        item: item,
        data: this.get('itemsService').getDataById(item.id)
          .then((result) => {
            if (result) {
              return result;
            } else {
              return {};
            }
          }, () => {
            return {};
          })
      });
    } else {
      return Ember.RSVP.resolve({
        item: item,
        data: {}
      });
    }
  }
});
