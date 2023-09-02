fetch('database.json')
    .then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
    })
    .then(jsonData => {
    console.log(jsonData);
    })
    .catch(error => {
    console.error('Error:', error);
    });