require('marko/node-require').install();

var template = require('./template.marko');

template.render({
        bodyText: 'body content'
    }, process.stdout);