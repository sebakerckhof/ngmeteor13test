import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  if ( Meteor.users.find().count() === 0 ) {
    Accounts.createUser({
      username: 'johndoe',
      email: 'john@doe.com',
      password: 'johndoe',
    });
  }
});