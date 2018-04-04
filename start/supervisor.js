var http = require('http');
var url = require('url');

var server = new http.Server(function(req,res){
  var urlParsed = url.parse(req.url, true)
  var welcomeText = `<div class="bg_bl" style="background:#444;color:#fff; width:100%;height:100%;position:fixed;display:block">
    <div>Welcome To multistring nodes and VERY HOT RELOADDDDD  </div>
    <div>The reload works after a  </div>
  <code>

  npm i -g supervisor
  </code>
  </div>`
  debugger
   res.statusCode = 200; //OK
   res.end(welcomeText);
});
server.listen(1337, '127.0.0.1');
