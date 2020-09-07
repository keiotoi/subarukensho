const express = require('express')
const app = express()
const port = 3000
const request = require('request');

var options = {
    url: 'https://localhost:5001/api/values',
    //url: 'https://google.com',
    method: 'GET'
}

app.get('/', (req, res) => {

    request(options, function (error, response, body) {
        res.send(body)
    })
    console.log('test');

})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})