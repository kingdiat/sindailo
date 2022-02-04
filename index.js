var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/'));
app.get('/', function(req, res) {
    if (JSON.stringify(req.query) === '{}') {
        res.sendFile(__dirname + '/index0.html');
    }
    else {
        res.sendFile(__dirname + '/' + Object.keys(req.query)[0]);
    }

});

app.listen(80, function() {
    console.log('Express started!');
});

