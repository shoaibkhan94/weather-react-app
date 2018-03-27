const express = require("express");
const bodyParser = require("body-parser");

var app = express();

const PORT = process.env.PORT || 4000;


app.use(bodyParser.json());

app.use(express.static("client/build"));


app.listen(PORT, () => {
// eslint-disable-next-line no-console
	console.log(`App Running at http://localhost:${PORT}`);
});

module.exports = {app};