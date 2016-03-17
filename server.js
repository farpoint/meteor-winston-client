var util = Npm.require("util"),
    lastMessage = ''; // The message to return to the user

/**
A custom transport for winston that is used by winston-client to send log messages back to the client
@class MeteorClient
*/
var MeteorClient = Winston.transports.MeteorClient = function (options) {
  this.name = 'meteorClient';
  this.level = options.level || 'silly';
};

util.inherits(MeteorClient, Winston.Transport);

/**
Determine if a dictionary is empty
@method isEmpty
@param {Object} obj The object to test
@return Boolean
*/
function isEmpty(obj) {
    "use strict";
    var prop, result;
    if (Object.keys) { // EMCAScript 5 support
        result =  Object.keys(obj).length === 0;
    } else { // Old school
        for (prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                return false;
            }
        }
        result = true;
    }
    return result;
}

MeteorClient.prototype.log = function (level, msg, meta, callback) {
  // @TODO: Make the log message conform better to Winston's own output
  "use strict";
  lastMessage = level + ': ' + msg;
  if (!isEmpty(meta) && JSON.stringify) {
    lastMessage += '\nmeta = ' + JSON.stringify(meta)
  }
  callback(null, true);
};

Winston.add(Winston.transports.MeteorClient, {});
Meteor.startup(function () {
    Meteor.methods({
      /**
      A rough equivalent to Winston.log() over Meteor.call.
      Takes the same arguments
      */
      'winston-client.log': function() {
        check(arguments, [Match.Any]);
        Winston.log.apply(null, arguments);
        return lastMessage;
      }
    });
});
