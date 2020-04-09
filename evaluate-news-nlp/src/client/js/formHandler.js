function handleSubmit(event) { 
    event.preventDefault()

    let form = document.getElementById('url').value
    let name = document.getElementById('name').value
  
    if (client.checkUrl(form)) {
        const postUrl = async (url = '', data = {}) => {
            const response = await fetch(url, {
                method: 'POST',
                credentials: 'same-origin', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            try {
                const newData = await response.json();
                document.getElementById('results').innerHTML = `<div>${name}, hello! These are your site reviews\:</div><div>label: ${newData.label}</div><div>code: ${newData.code}</div><div>confidence: ${newData.confidence}</div>`
                return newData
            } catch (error) {
                console.log("error", error);
            }
        };

        postUrl('http://localhost:8099', { url: form })
    }
}

export { handleSubmit }
