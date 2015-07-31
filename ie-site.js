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

Template.register.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Accounts.createUser({
    email: email,
    password: password
}, function(error){
    if(error){
        console.log(error.reason); // Output error if registration fails
    } else {
        Router.go("home"); // Redirect user if registration succeeds
    }
});

        Router.go('/');
    }});
Template.navbar.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('login');
    }
});

Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Meteor.loginWithPassword(email, password, function(error){
    if(error){
        console.log(error.reason);
    } else {
        Router.go("/");
    }
});

    }
});



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

Router.route('/register');

Router.route("/login");




