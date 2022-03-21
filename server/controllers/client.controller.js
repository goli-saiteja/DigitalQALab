export const serveClient = (req, res, next) => {
    const path = require('path');
    const clientFile = path.join(__dirname, '../../client/dist/index.html');
    res.sendFile(clientFile);
}