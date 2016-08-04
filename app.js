'use strict';

const express = require('express'),
    cors = require('cors'),
    debug = require('debug')('metadata:app'),
    handlers = require('./lib/handlers');

let port = process.env.PORT || 5532,
    app = express(),
    server;

app.use(cors());
app.use(handlers.contentJson);

app.get('/_hc', handlers.healthCheck);

server = app.listen(port, _ => debug('Listening on port %s', port));

module.exports = server;
