const http = require('http');
const shell = require('shelljs');

http.createServer((req, res) => {
  console.log('building...');
  req.write('<span>building...</span>');
  req.url === 'front' ? shell.exec('./front.sh') : shell.exec('./back.sh');
  res.end();
}).listen(8887);