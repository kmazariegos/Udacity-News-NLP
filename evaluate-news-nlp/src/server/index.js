var path = require('path') 
const bodyParser = require("body-parser")
const cors = require("cors")
const express = require('express')
var aylien = require("aylien_textapi")

var textapi = new aylien({
    application_id: '20010ec4',
    application_key: '252945ee2af6c4841e1b37ca56b6cb3d'
})

const app = express() 

app.use(express.static('dist'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
console.log(__dirname)

app.listen(8095, function () {
    console.log('Listening on port 8095!')
})


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

//not using post and going to use a get request instead. 
app.get('/test/:testURL', function (req, res) {
    let testURL = req.params.testURL || "";
    if (testURL) {
        textapi.sentiment({url: testURL}, function(error, response) {
            if (error === null) {
                res.send({
                    "message": response,
                })
            } else {
                res.send({
                    "error": error
                })
            }
        });
    } else {
        res.send({
            "error": "invalid URL, please try another"
        })
    }
});

