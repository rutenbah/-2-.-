var http = require('http');
var fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;
var url = require("url");
var path = require('path');
//var port = process.env.port || 1337;
var mimeTypes =
{
    '.js': 'text/javascript', '.html': 'text/html', '.css' : 'text/css', '.jpg' : 'image/jpeg', '.gif' : 'image/gif', '.png' :'image/png' 
};
http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname;
    if (pathname == '/') { pathname = '/index.html'; }
    pathname = pathname.substring(1, pathname.length); 
    var extname = path.extname(pathname);
    var mimeType = mimeTypes[extname]; 
    fs.readFile(pathname, function (err, data) {
        if (err) {
            console.log('Could not find or open file ' + pathname + ' for reading\n');
        } else {
            res.writeHead(200, { 'Content-Type': mimeTypes[extname] });
            res.end(data);
        }
    });
}).listen(port, hostname);

