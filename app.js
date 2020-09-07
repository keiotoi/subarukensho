const express = require('express')
const app = express()
const port = process.env.PORT || 8085;
const request = require('request');

var options = {
    url: 'http://localhost:5000/api/values',
    //url: 'https://google.com',
    method: 'GET'
}

app.get('/', (req, res) => {

    request(options, function (error, response, body) {
        res.send(body)
        console.log(body);
        console.log('test');
    })


    //res.send('Hello world!')

})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
