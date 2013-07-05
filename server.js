var winston = Winston;

Meteor.methods({
  'winston-client.log': function() {
    winston.log.apply(null, arguments);
    return "Log";
  }
});