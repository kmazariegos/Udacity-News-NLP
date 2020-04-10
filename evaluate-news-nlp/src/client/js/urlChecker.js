function checkUrl(inputText) {
    var regex = RegExp('^(http|https):\/\/'); 
    if (regex.test(inputText) == false) {
        console.log('URL not valid.');
        console.log('Need to start with \"http(s)://\".')
        return false;
    } else {
        console.log('URL is valid.');
        return true;
    }
}
export { checkUrl }
