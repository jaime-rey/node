/**
 * Created by Jaime on 23/06/2017.
 */
let http = require('http');
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Hello World</h1>');
    res.end('Your user agent is ' + req.headers['user-agent']);

}).listen(1555, '127.0.0.1');