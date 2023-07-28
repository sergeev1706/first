

import http from 'http';
import fs from 'fs'

let object = {
  '/page1': 'file1.html',
  '/page2': 'file2.html',
  '/page3': 'file3.html',
}

http.createServer(async (request, response) => {

  let text = 'page not found';
  let status = 404;

  if (request.url !== '/favicon.ico') {
    for (const key in object) {

      if (request.url === key) {
        text = await fs.promises.readFile(object[key], 'utf8');
        status = 200;
      }
    }
    response.writeHead(status, { 'Content-Type': 'text/html' });
    response.write(text);
    response.end();

  }
}).listen(3000);


