const http = require('http');

const url = "http://api.openweathermap.org/data/2.5/forecast/daily";

module.exports = function (app) {

    /**
     * GET api call.
     * @param {string} title - The title of the book.
     * @param {string} author - The author of the book.
     */
    app.get('/weather', (req, res) => {
        const {params} = req.params;
        //console.log(creator);
        http.get(url, res => {
            res.setEncoding("utf8");
            let body = "";
            res.on("data", data => {
                body += data;
            });
            res.on("end", () => {
                body = JSON.parse(body);
                console.log(body);
            });
        });
    });
};