var Gitter = require('node-gitter');

var gitter = new Gitter();

gitter.rooms.join('kl2karpenko/test-chat')
    .then(function(room) {
        room.send('Hello world!');
    });
