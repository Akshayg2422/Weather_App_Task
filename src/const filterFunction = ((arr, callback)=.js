const filterFunction = ((arr, callback) => {
    let filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]) ? filteredArr.push(arr[i]) : null
    }
    return filteredArr
})

function odd(x) {
    return x % 2 !== 0
}

function even(x) {
    return x % 2 === 0
}
const array = [1, 2, 3, 4, 5, 6, 7, 8]

const oddNumber = filterFunction(array, odd)
console.log(oddNumber)

const evenNumber = filterFunction(array, even)
console.log(evenNumber)


const str = "<p><strong><em>JS Exercises</em></strong></p>";

function removeHtmlTags(input) {
    let tempDiv = document.createElement('div')
    tempDiv.innerHtml = input
    return tempDiv.innerText || ''
}

const result = removeHtmlTags(str)
console.log(result)
