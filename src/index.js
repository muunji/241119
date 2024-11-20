const http = require('http');
//http : 프로토콜
const fs = require('fs')

const minji = http.createServer(function(request, response){
  // 콜백 함수
  if (request.url === '/') {

    fs.readFile("./public/index.html","utf-8",function(error,data){
      response.writeHead(200,{"content-type" : "text/html"});
      response.write(data);
      response.end();
    })
  }
});
// 서버 : 자동기계, 몇 개든 만들 수 있다, 자동화된 이름

//http서버 : 나 대신 문서를 전달해줘
// 예측하는 서버, 점검하는 서버, 레벨업해주는 서버,,,, 옮겨가면서 한다

//'/' : 정적이다
//동적인 페이지를 만들 수 있음

minji.listen(3000,function(){
  console.log('잘 듣고 있는중');
})

//왜 프로토콜을 사용할까
//요청과 응답을 하는 이유
//end? 

// const http = require("http");
// const fs = require("fs");

// const DATA_SANGJA = {};

// const minji = http.createServer(function (request, response) {

//   let joomoon = request.url;

//   if (request.url === joomoon) {
    
//     let myDesk = fs.readFileSync("./public/index.html", "utf8");
//     DATA_SANGJA.joomoon = myDesk;

//     response.writeHead(200, { "Content-Type": "text/html" });
//     response.write(DATA_SANGJA.joomoon);
//     response.end();

//   }
// });

// minji.listen(3000, function () {
//   console.log(" 잘듣고 있는중 ");
// });

//html하나만 응답해준 것