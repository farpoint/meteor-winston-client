# Winston-client
> "Because even the client deserves a great logger"

winston-client pushes a simplified `winston` object down to the client that logs messages to the console and sends them up to the server as well. winston-client supports the default `Winston.config.cli` levels:

    Winston.silly("Silly!");
    Winston.input("Very verbose");
    Winston.verbose("Just a little wordy");
    Winston.prompt("Not as many words");
    Winston.debug("Good for a coder");
    Winston.info("The standard logging level in winston");
    Winston.data("More important than info")
    Winston.help("Something needs help");
    Winston.warn("Something might be broken");
    Winston.error("Something is broken!!");

In addition to these methods, the raw `Winston.log` method is meant to behave similarly to `Winston.log` on the server:

    // Basic logging
    Winston.log('info', 'Hello distributed log files!');
    Winston.info('Hello again distributed logs');
    
    // Logging with metadata
    Winston.log('info', 'Test Log Message', { anything: 'This is metadata' });
    
    // String interpolation
    Winston.log('info', 'test message', 'first', 'second', {number: 123});
    // info:    info test message first second
    // meta = {"number":123} 

Log messages are sent back to the server via `Meteor.call('winston-log)` for processing via `winston.log()`. Use [winston-airbrake](https://atmosphere.meteor.com/package/winston-airbrake) or [winston-loggly](https://atmosphere.meteor.com/package/winston-airbrake) to make the most of winston on your client!

To limit the messages that are logged to the user's console:

    Winston.transports.MeteorClient.level = 'info'; // Or any other transport level you like.

# Limitations
`Winston.log` with the MeteorClient transport does not behave the same as the Winston Console transport at this time, specifically in how it prints any metadata and especially in how it handles string interpolation. If you'd like to fix this, 

Also, worthy of note - winston-client hasn't been tested much, so file issues as you find them and be careful how you handle your logs.

# Future improvements
Although I don't believe setting up more than the console transport on winston on the client would be wise, it would be helfpul to synchronize the server winston object's error levels with the client's. For now, it's hard-wired to the config.cli levels, however.

# License
The MIT License (MIT)

Copyright (c) 2013 The Space EdVentures Foundation, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.