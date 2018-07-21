const http = require('http');
const shell = require('shelljs');

http.createServer((req, res) => {
  console.log('building...');
  const {url} = req;
  url === '/front' ? shell.exec('./front.sh') : shell.exec('./back.sh');
  res.write(`building ${url}`);
  res.end();
}).listen(8887);