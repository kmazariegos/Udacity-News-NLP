const validUrl = require('valid-url');

function ValidURL(URL) { 
    return validUrl.isUri(URL)
}

module.exports = ValidURL; 
