var nano = require('nanomsg');

var pull = nano.socket('pull');

var addr = 'tcp://127.0.0.1:7789'
pull.connect(addr);

pull.on('message', function (buf) {
    console.log(buf.toString());
});