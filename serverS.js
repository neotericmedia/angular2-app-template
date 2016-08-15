// const path = require('path');
// const express = require('express');
// const app = express();
//
// app.use(express.static(__dirname + './../public'));
//
// app.get('*', function response(req, res) {
//     res.sendFile(path.join(__dirname, '../public/index.html'));
// });
//
// app.listen(3000, function onStart(err) {
//   if (err) {
//     console.log(err);
//   }
//   console.info('==> 🌎 Listening on port 3000!');
// });


'use strict';

var express = require('express');

var app = express();

app.use('/', express.static('public'));

app.listen(3000, function() {
    console.log("The server is running on port 3000!");
});
