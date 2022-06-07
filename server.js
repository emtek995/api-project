const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const data = {
    'place': 'texas',
    'length': 9
}

app.get('/', (_, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/api', (_, res) => {
    res.json(data);
});

app.post('/api/:derp', (req, res) => {
    console.log(req.params.derp);
    res.json({'status': 'ok'});
});

app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}`);
});
