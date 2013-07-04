# Winston-client
> "Because even the client deserves a great logger"

winston-client pushes a simplified `winston` object down to the client that logs messages to the console and sends them up to the server as well:

    // Basic logging
    winston.log('info', 'Hello distributed log files!');
    winston.info('Hello again distributed logs');
    
    // Logging with metadata
    winston.log('info', 'Test Log Message', { anything: 'This is metadata' });
    
    // String interpolation
    logger.log('info', 'test message', 'first', 'second', {number: 123});
    // info: test message first second
    // meta = {number: 123}

winston-client supports the default `winston.config.cli` levels:

    {
      silly: 0,
      input: 1,
      verbose: 2,
      prompt: 3,
      debug: 4,
      info: 5,
      data: 6,
      help: 7,
      warn: 8,
      error: 9
    }

Log messages are sent back to the server via `Meteor.call('winston-log)` for processing via `winston.log()`.

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