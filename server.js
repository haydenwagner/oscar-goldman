const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const cors = require('./server/cors');
const api = require('./server/routes/api');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use( cors() );
app.use(express.static('./dist'));
app.use('/api', api);

app.get('*', (req, res) => {
    console.log(__dirname);
  res.sendFile('dist/index.html', {root: __dirname});
});

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));
