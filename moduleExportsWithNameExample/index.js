var hello = require('./src/hello.js');

hello.hello();

hello.quim();

// o també es pot fer:


var hello = require('./src/hello.js').hello;

hello();

var quim = require('./src/hello.js').quim;

quim();


// o també es pot fer:

require('./src/hello.js').hello();
require('./src/hello.js').quim();

