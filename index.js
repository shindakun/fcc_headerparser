/*
Example usage:
https://cryptic-ridge-9197.herokuapp.com/api/whoami/
Example output:
{"ipaddress":"216.64.169.10","language":"en-US","software":"Windows NT 6.3; Win64; x64"}
*/

'use strict';

const express = require('express');
const useragent = require('useragent');
let app = express();

app.get('/', function (req, res) {
  let os = useragent.parse(req.headers['user-agent']).os.toString();
  res.json({
    ipaddress: req.headers['x-forwarded-for'],
    language: req.headers['accept-language'],
    software: os
  });
});
app.listen(process.env.PORT || 3000);
