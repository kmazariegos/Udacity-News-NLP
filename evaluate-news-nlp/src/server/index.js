var path = require('path') 
const bodyParser = require("body-parser")
const cors = require("cors")
const express = require('express')
var aylien = require("aylien_textapi")

Data = {}
console.log(Data)

var textapi = new aylien({
    application_id: '20010ec4',
    application_key: '252945ee2af6c4841e1b37ca56b6cb3d',
})

const app = express() 

app.use(express.static('dist'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
console.log(__dirname)

app.listen(8099, function () {
    console.log('Listening on port 8099!')
})


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.post('/api', function (req, res) {
    textapi.classify({
        url: req.body.url
    }, function (error, response) {
        if (error === null) {
            response['labels'].forEach(function (labels) {
                Data = labels;
                res.send(Data);
            });
        }
    });
})

