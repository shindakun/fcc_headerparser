/*
Example usage:
https://cryptic-ridge-9197.herokuapp.com/api/whoami/
Example output:
{"ipaddress":"216.64.169.10","language":"en-US","software":"Windows NT 6.3; Win64; x64"}
*/

'use strict';

const express = require('express');
let app = express();

app.get('/', function (req, res) {
  res.send('Hello world!');
});
app.listen(process.env.PORT || 3000);
