App = Ember.Application.create();
App.ApplicationAdapter = DS.FixtureAdapter;


App.Router.map(function() {
  this.resource('tables', { path: '/'}, function () {
    this.resource('table', { path: ':table_name' });
  });
})

App.TablesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('table');
  }
});

App.TableRoute = Ember.Route.extend({
    model: function(params) {
      return tables.findBy('table_name', params.table_name);
    }
});

App.TableController = Ember.ObjectController.extend({
  isEditing: false,
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    doneEditing: function() {
      this.set('isEditing', false);
    }
    }
  });
