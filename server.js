const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname)));
app.use("/css", express.static(__dirname));
app.use("/img", express.static(__dirname + '/img'));
app.use("/js", express.static(__dirname + '/js'));
app.use("/data", express.static(__dirname + '/data'));


app.get('/', function (req, res) {
  res.sendFile('index.html');
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`SERVING ON PORT ${port} ...`);
});