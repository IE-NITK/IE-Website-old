Person = new Mongo.Collection("persons");
Person.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Name",
    max: 200
  },
  branch: {
    type: String,
    label: "Branch"
  },
  contact: {
    type: String,
    label: "Contact Number",
    //min: 0
  },
  dob: {
    type: String,
    label: "Date of birth",
    optional: true
  },
  summary: {
    type: String,
    label: "About me",
    optional: true,
    max: 1000
  }
}));

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




