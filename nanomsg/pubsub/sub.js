var nano = require('nanomsg');

var sub = nano.socket('sub');
var nn = nano._bindings;

var addr = 'tcp://127.0.0.1:7789'
sub.setsockopt(nn.NN_SUB, nn.NN_SUB_SUBSCRIBE, 'my.topic');
sub.connect(addr);

sub.on('message', function (buf) {
    console.log(buf.toString());
});
