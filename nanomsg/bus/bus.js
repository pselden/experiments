var nano = require('nanomsg');
    // Number of buses to create.
    var count = 3;
    var total = count * (count-1), current = 0;

    // Create buses.
    var buses = {};
    for (var i = 0; i < count; i++) {
        (function (i) {
            var bus = nano.socket('bus');
            var addr = 'inproc://bus' + i;
            bus.bind(addr);
            buses[addr] = bus;

            // Add a "response count" for each bus.
            // We want this to equal the number of other buses.
            bus.responseCount = 0;

            // Tally messages from other buses.
            bus.on('message', function (msg) {
                console.error('#', 'received message from', msg.toString(), 'on', addr)
                this.responseCount++;
                current++;
                if (this.responseCount == count - 1) {
                    // All set! bus received all messages.

                }
                if (current == total) {
                    // close all buses.
                    Object.keys(buses).forEach(function (addr) {
                        buses[addr].close();
                    })
                }
            })
        })(i);
    }

    // Connect all possible pairs of buses.
    setTimeout(function () {
        var keys = Object.keys(buses)
        for (var i = 0; i < keys.length; i++) {
            for (var j = i+1; j < keys.length; j++) {
                console.error('#', 'connecting', keys[i], 'to', keys[j]);
                buses[keys[i]].connect(keys[j])
            }
        }
    }, 500);

    // Send messages on every bus.
    setTimeout(function () {
        Object.keys(buses).forEach(function (addr) {
            console.error('#', 'writing on', addr, addr);
            buses[addr].send(addr);
        })
    }, 1000);
