var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var webLogger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'img', 'favicon.ico')));

app.use(webLogger('dev'));

if (app.get('env') === 'development') { } else {
    var compression = require('compression');
    var minify = require('express-minify');
    app.use(compression());
    app.use(minify({ cache: path.join(__dirname, 'cache') }));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/vendor', express.static(path.join(__dirname, 'vendor')));
app.post('/api/order', function (req, res) {
    var mailer = require('./mailer')();
    var body = 'Email: ' + req.body.email + ' Message: ' + req.body.message;
    mailer.sendEmail(__env.EMAIL_ADMIN, 'New order from Portfolio', body, function (error, info) {
        if (error) {
            console.error(error);
        }
        console.log('Message sent: ' + info.response);
        res.redirect('/');
    });
});

module.exports = function () {
    var debug = require('debug')('app:server');
    var http = require('http');
    var port = normalizePort(__env.PORT || '80');
    app.set('port', port);

    var server = http.createServer(app);
    server.listen(port);
    server.on('error', onError);
    server.on('listening', onListening);

    return app;

    function normalizePort(val) {
        var port = parseInt(val, 10);
        if (isNaN(port)) return val;
        if (port >= 0) return port;
        return false;
    }

    function onError(error) {
        if (error.syscall !== 'listen') {
            throw error;
        }

        var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

        switch (error.code) {
            case 'EACCES':
                console.error(bind + ' requires elevated privileges');
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(bind + ' is already in use');
                process.exit(1);
                break;
            default:
                throw error;
        }
    }

    function onListening() {
        var addr = server.address();
        var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
        debug('Listening on ' + bind);
    }
};