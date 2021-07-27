const http = require('http');
const helloWorld = require('./test.js')

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  console.log(helloWorld.module);
  if (req.url === "/abc"){
    res.end(helloWorld.module.key2);
  } else {
    res.end(helloWorld.module.key1);
  }
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
