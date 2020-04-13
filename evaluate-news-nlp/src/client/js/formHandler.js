const { fetch } = require('whatwg-fetch');
const ValidURL = require('./urlChecker');

function handleSubmit(URL) {
    if (URL && ValidURL(URL)) {
        fetch('http://localhost:8095/test/' + encodeURIComponent(URL))
            .then(res => res.json())
            .then(function (res) {
                let response = res.message;
                console.log(response)
                document.getElementById('polarity').innerHTML = response.polarity
                document.getElementById('subjectivity').innerHTML = response.subjectivity
                document.getElementById('polarity_confidence').innerHTML = response.polarity_confidence
                document.getElementById('subjectivity_confidence').innerHTML = response.subjectivity_confidence
                document.getElementById('textExcerpt').innerHTML = response.text
            })
        return true;
    } else {
        let resultElement = document.getElementById('results')
        if (resultElement) {
            resultElement.innerHTML = "Please enter valid URL"
        }
        return false;
    }
}

module.exports = handleSubmit;