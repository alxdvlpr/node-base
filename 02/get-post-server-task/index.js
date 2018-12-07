const url = require('url');
const fs = require('fs');
const path = require('path');
const http = require('http');

const server = new http.Server();

server.on('request', (req, res) => {

  const pathname = decodeURI(url.parse(req.url).pathname);

    function getFilePath() {
        let fileName = path.parse(pathname).base;
        const filePath = path.join(__dirname, 'files', fileName);
        return filePath;
    }

    switch(req.method) {
  case 'GET':
    if (pathname == '/') {
      const filePath = path.join(__dirname, 'public', 'index.html');
      const fileStream = fs.createReadStream(filePath);
      fileStream.pipe(res);
    } else if (pathname.length > 1) {
        const filePath = getFilePath();
        const fileStream = fs.createReadStream(filePath);
        fileStream.on('data', chunk => {
            res.statusCode = 200;
            res.end(chunk);
        });
        fileStream.on('end', () => {
            res.end();hones
            

        });
        fileStream.on('error', () => {
            res.statusCode = 404;
            res.end("Not found");
        });
    }else {
      res.statusCode = 404;
      res.end("Not found");
    }

    break;
      case 'POST':

          break;
      case 'DELETE':
          break;


  default:
    res.statusCode = 501;
    res.end('Not implemented');
  }

});

server.listen(3000);
