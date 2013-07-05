var util = Npm.require("util"),
    lastMessage = '';

// Use a custom transport to catch the parsed log
var MeteorClient = Winston.transports.MeteorClient = function (options) {
  this.name = 'meteorClient';
  this.level = options.level || 'silly';
};

util.inherits(MeteorClient, Winston.Transport);

function isEmpty(obj) {
  if (Object.keys) { // EMCAScript 5 support
    return Object.keys(obj).length === 0;
  } else { // Old school
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }
    
    return true;
  }
}

MeteorClient.prototype.log = function (level, msg, meta, callback) {
  // @TODO: Make the log message conform better to Winston's own output
  
  lastMessage = level + ': ' + msg;
  if (!isEmpty(meta) && JSON.stringify) {
    lastMessage += '\nMetadata: ' + JSON.stringify(meta)
  }
  callback(null, true);
};

Winston.add(Winston.transports.MeteorClient, {});
 
Meteor.methods({
  'winston-client.log': function() {
    check(arguments, [Match.Any]);
    Winston.log.apply(null, arguments);
    return lastMessage;
  },
  'winston-client.setLevel': function(level) {
    check(level, String);
    MeteorClient.level = level;
    
    return "Now logging with level " + level;
  }
});