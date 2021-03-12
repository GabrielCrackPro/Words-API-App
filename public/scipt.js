const wordContainer = document.querySelector('.word')
let response = fetch('https://api.dictionaryapi.dev/api/v2/entries/en_US/hello')
    //Word
    .then(res => res.json()
        .then(d => wordContainer.innerHTML = JSON.stringify(d[0].word)))