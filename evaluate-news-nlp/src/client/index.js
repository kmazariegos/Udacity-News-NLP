const handleSubmit = require("./js/formHandler");

document.getElementById('processURL').addEventListener('click', () => {
    let URL = document.getElementById('url').value;
    handleSubmit(URL)
});
