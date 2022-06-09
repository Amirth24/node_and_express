const http = require('http')

const server = http.createServer((req,res) => {
    console.log('request event');
    res.end('<h1>Hello User</h1>');

    // This runs for every request it receivies.
});

server.listen(5000,() => {
    console.log('Server Listening on the port 5000... ');
    // This runs once the server is created. 
});
