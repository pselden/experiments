var nano = require('nanomsg');
var push = nano.socket('push');

var addr = 'tcp://127.0.0.1:7789'
push.connect(addr);
push.bind(addr);

var i = 0;
setInterval(function () {
    push.send("Hello from nanomsg! " + i++);
}, 1000);