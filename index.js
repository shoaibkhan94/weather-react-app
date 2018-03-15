require('./config/config');
const express = require('express');
const bodyParser = require('body-parser');

var app = express();

const PORT = process.env.PORT || 4000;


app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('public'));
}
else{
    app.use(express.static('public'));
}

app.listen(PORT, () => {
    console.log("Server Listening on port ", PORT);
});

module.exports = {app};