let url = 'https://www.googleapis.com/books/v1/volumes?q='
let searchBar = document.getElementById('search')
let submitButton = document.getElementById('submit')
let container = document.getElementById('container') 

function request(search) {
    fetch(url + search)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data.items)
        displayResults(data.items)
    })
}

submitButton.onclick = () => {
    if (searchBar.value != '') {
        request(searchBar.value)
    }
}

function displayResults(results) {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
    results.forEach(result => {
        let title = document.createElement('p')
        title.innerText = result.volumeInfo.title 

        container.appendChild(title)
    });
}