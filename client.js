var log = function(level, args) {
  args = Array.prototype.slice.call(args, 0),
  args.splice(0, 0, level);
  args.splice(0, 0, "winston-client.log");
  args.push(function(error, result) {
    if (error) {
      throw error;
    } else {
      if (result)
        console.log(result);
    }
  });
  Meteor.call.apply(null, args);
}

Winston = {
  log:      function(level) { log(level, Array.prototype.slice.call(arguments, 1)); },
  silly:    function() { log('silly', arguments); },
  input:    function() { log('input', arguments); },
  verbose:  function() { log('verbose', arguments); },
  prompt:   function() { log('prompt', arguments); },
  debug:    function() { log('debug', arguments); },
  info:     function() { log('info', arguments); },
  data:     function() { log('data', arguments); },
  help:     function() { log('help', arguments); },
  warn:     function() { log('warn', arguments); },
  error:    function() { log('error', arguments); }
};


