var nano = require('nanomsg');
var pub = nano.socket('pub');
var addr = 'tcp://127.0.0.1:7789'
pub.bind(addr);

setInterval(function () {
    pub.send("my.topic This is a topic");
    pub.send("my.dog My dog's name is Spot");
}, 1000);