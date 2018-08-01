const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = 3005;
let app = express();




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));


app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile('index.html');
})

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});