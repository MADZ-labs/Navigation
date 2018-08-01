const express = require('express');
const bodyParser = require('body-parser');
const Log = require('Log');

const app = new express();
const log = new Log('info');
const port = process.env.PORT || 3005;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.listen(port, () => {
  log.info(`Listening on http://localhost:${port}`);
});

