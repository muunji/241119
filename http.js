const http = require("http");
const fs = require("fs");

const DATA_SANGJA = {};

const minji = http.createServer(function (request, response) {

  let joomoon = request.url;

  if (request.url === joomoon) {
    
    let myDesk = fs.readFileSync("./public/index.html", "utf8");
    DATA_SANGJA.joomoon = myDesk;

    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(DATA_SANGJA.joomoon);
    response.end();

  }
});

minji.listen(3000, function () {
  console.log(" 잘듣고 있는중 ");
});