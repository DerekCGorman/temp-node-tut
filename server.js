const http = require('http')

const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        res.end('<h1>Hello World from server</h1>');
    }
    else if(req.url === '/about'){
        res.end('<h1>Here is our short history</h1>')
    }else{
        res.write(`
            <h1>Oops!</h1>
            <p>We can't seem to find the page you are looking for</p>
            <a href='/'>back home</a>
        `);
        res.end();
    }
})

server.listen(5000)