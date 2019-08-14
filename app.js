var express = require('express');

var path = require('path');

var app = express();

app.listen(3000);

app.use(express.static('./public'));

app.all('/*', function(req, res) {
    res.sendFile(path.resolve('public/index.html'));
});


console.log('Servidor On');