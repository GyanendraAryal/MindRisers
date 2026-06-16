function debounce(fn, delay){}

const search = (query) => {
    console.log(`Searching for ${query}`);
}

const searchWithDebounce = debounce(search, 1000)

search("H")
search("Ha")
search("Har")
search("Hard")
search("Hard ")
search("Hard J")
search("Hard Js")
