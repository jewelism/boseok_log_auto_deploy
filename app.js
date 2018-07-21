const http = require('http');
const shell = require('shelljs');

http.createServer((req, res) => {
  shell.exec('./build.sh');
  res.end();
}).listen(8080);