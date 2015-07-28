if (Meteor.isClient) {
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

Router.route('/', function () {
  this.render('home');
});

Router.route('/form');

Router.route('/sigs');

Router.route('/events');
