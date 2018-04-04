
// Task is http://127/0/0/1/echo?message=Hello -> Hello or Bye

// ver 1 is just answering the request, but takes no url
// var http = require('http');
// var server = new http.Server(function(req,res){
// console.log(req.method, req.url);
// res.end();
// });
//
// server.listen(1337, '127.0.0.1')

// ver 2 is parsing url and making a real page
// var http = require('http');
// var url = require('url');
// var server = new http.Server(function(req,res){
// console.log(req.method, req.url);
// var urlParsed = url.parse(req.url, true)
// console.log(urlParsed);
//  if  (urlParsed.pathname == '/echo' && urlParsed.query.message){
//    var myNoda = `<div class="bg_bl">
//    Welcome To
//    multistring nodes
//
//    </div>`
//    res.end(myNoda + urlParsed.query.message);
//  } else {
//    res.statusCode = 404;
//    res.end("Page not found" + urlParsed.pathname + urlParsed.query.message);
//  }
// });
//
// server.listen(1337, '127.0.0.1');

// and you get

// protocol: null,
// slashes: null,
// auth: null,
// host: null,
// port: null,
// hostname: null,
// hash: null,
// search: null,
// query: null,
// pathname: '/',
// path: '/',
// href: '/'













var http = require('http');
var url = require('url');
var server = new http.Server(function(req,res){
console.log(req.headers);
// and you get
// host: '127.0.0.1:1337',
// connection: 'keep-alive',
// 'cache-control': 'max-age=0',
// 'upgrade-insecure-requests': '1',
// 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/
// accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/
// 'accept-encoding': 'gzip, deflate, br',
// 'accept-language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,uk;q=0.6'


var urlParsed = url.parse(req.url, true)
 if  (urlParsed.pathname == '/echo' && urlParsed.query.message){
   var myNoda = `<div class="bg_bl">
   Welcome To multistring nodes
   </div>`
   // res.setHeader('Cache-control', 'no-cache');
   // res.setHeader('Cache-control', 'no-cache, no-store, must-revalidate');
   // All headers that you set are being sent after a special move, e.g. res.end
   // or you can make an evident declaration , like   (deprecated, you can find new)     res.writehead(200, "OK", {'Cache-control': 'no-cache'});

   res.statusCode = 200; //OK
   res.end(myNoda + urlParsed.query.message);


 } else {
   res.statusCode = 404; // NOt Found
   // res.statusCode = 403; // Permitted
   // res.statusCode = 500; // Server Error

   res.end("Page not found" + urlParsed.pathname + urlParsed.query.message);
 }
});

server.listen(1337, '127.0.0.1');
