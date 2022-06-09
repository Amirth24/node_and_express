const http = require('http')

const server = http.createServer((req,res) => {
    if (req.url === '/'){
        res.end("<h1>Welcome</h1>");
    }
    res.end(`
        <h1>Page not found</h1>
        <p>Click <a href = "/">here</a> to go to home page</p>
`);
    
    console.log(req.url);
})

server.listen(5000)
