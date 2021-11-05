function findMatching(array, string) {
    return array.filter((element) => {
        return element.toLowerCase() === string.toLowerCase()
    })
}

function fuzzyMatch(array, string) {
    return array.filter((element) => {
        return element.toLowerCase().indexOf(string.toLowerCase()) !== -1 && 
        element.toLowerCase().indexOf(string.toLowerCase()) === 0;
    })
}

function matchName(array, string) {
    return array.filter((element) => {
        return element.name === string;
    })
}