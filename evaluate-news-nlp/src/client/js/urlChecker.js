function checkUrl(inputText) {
    var regex = RegExp('^(http|https):\/\/');
    if (regex.test(inputText) == false) {
        alert('URL not valid.');
        alert('Need to start with \"http(s)://\".')
        return false;
    } else {
        alert('URL is valid.');
        return true;
    }
}
export { checkUrl } 
