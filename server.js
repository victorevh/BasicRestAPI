const PORT = 3000;
const HTTP = require('http');

function handler(req, res) {
    // release for cors
    res.setHeader('Access-Control-Allow-Origin', '*');

    // header to send response
    const send = (payload = {}, statusCode = 200) => {
        res.writeHead(statusCode, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(payload))
    };

    // router
    switch(req.url) {
        case '/':
            send({ message: `You are on /`});
        break;

        case '/status':
            send({ message: `The server is running`, uptime: process.uptime() });
        break;

        case '/contact':
            send({ message: `Contact session`});
        break;

        default:
            send({ message: 'Resource not found' }, 404);
        break;
    }

    res.end();
}

HTTP
    .createServer(handler)
    .listen(PORT, () => {
        console.log(`The API is running on port: ${PORT}.`)
    });