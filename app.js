const http = require('http');
const shell = require('shelljs');

http.createServer((req, res) => {
  const {url} = req;
  if(url === '/favicon.ico')
    return;

  console.log(`request ${url} build`);
  if(validateURL(url)){
    console.log(`start building => ${url}`);
    shell.exec(`.${url}.sh`);
    res.write(`build end => ${url}`);
    console.log('build end');
  } else {
    res.write(`${url} not found\n`);
  }
  res.end();
}).listen(8887);

function validateURL(url) {
  return ['front', 'back', 'jsquad_web'].some(param => `/${param}` === url);
}