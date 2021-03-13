const search = document.querySelector('#search')
const wordContainer = document.querySelector('.word')
//Get a word
const getWord = (word, code) => {
    fetch(`http://api.dictionaryapi.dev/api/v2/entries/${code}/${word}`)
        .then(res => res.json().then(d => wordContainer.innerHTML = `
    <p>Word: ${word}</p>
    <p>Definition: ${JSON.stringify(d[0].meanings[0].definitions[0].definition)}</p>
    <p>Synonyms: ${JSON.stringify(d[0].meanings[0].definitions[0].synonyms)}</p>
    <a href="https://en.wikipedia.org/wiki/${word}" target="blank">Wiki</a>
    `
        ))
}

//Search a word
search.addEventListener('submit', (event) => {
    const wordData = new FormData(search)
    const word = wordData.get('search')
    const code = wordData.get('lang')
    if (word != '' && code != '') {
        wordContainer.classList.add('animated')
        getWord(word, code)
    }
    search.reset()
    event.preventDefault()
})