/**
 * Created by Jaime on 23/06/2017.
 */
const http = require('http');

http.createServer((req, res) => {
    //A parsed url to work with in case there are parameters
    let _url;
    //In case the client uses lower case for methods
    res.writeHead(200, {'Content-Type': 'text/html'});
    req.method = req.method.toUpperCase();
    console.log(req.method + ' ' + req.url);


    if (req.method !== 'GET') {
        res.writeHead(501, {
            'Content-Type': 'text/plain'
        });
        return res.end(req.method + ' is not implemented by this server.');
    }

    // res.end('The current time is ' + Date.now());

    if (_url = /^\/employees$/i.exec(req.url)) {
        //return a list of employees
        res.writeHead(200);
        return res.end('employee list');
    } else if (_url = /^\/employees\/(\d+)$/i.exec(req.url)) {
        // find the employee by the id in the route
        res.writeHead(200);
        return res.end('a single employee');
    } else {
        res.writeHead(404);
        return res.end('static file maybe');
    }
}).listen(1555, '127.0.0.1');