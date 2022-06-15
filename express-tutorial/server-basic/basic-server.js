const http = require('http');
const url = require('url');

const server = http.createServer((req, res) =>{

    let q = url.parse(req.url, true);
    // Home Page
    if (q.pathname === '/'){
        res.writeHead(200, {'content-type' : 'text/html'});
        res.write(`<h1>Home Page</h1>`);
        res.end();
    }
    // Name in url
    else if (q.pathname === '/name'){
        res.writeHead(200, {'content-type' : 'text/html'});
        const name = q.query.name;
        res.write(`<h1>Home ${name}</h1>`);
        res.end();
    }
    // 404 Error
    else {
        res.writeHead(404, {});
        res.write('<h1>Oops Page not found.</h1>');
        res.end();
    }
}); 

// Server Started
server.listen(5000,() => {
    console.log("Listening on port: 5000");
});
