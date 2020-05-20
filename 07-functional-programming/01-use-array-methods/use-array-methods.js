/* eslint-disable no-unused-vars */

function indexAndValue(arr) {

    let result = arr.map((elem, ind) => {
        let objToCreate = { index: ind, value: elem }
        return objToCreate;
    })

    return result;
}

function capitalize(str) {

    return str.toUpperCase();

}

function swapCase(str) {

    let arrToMap = str.split(' ');

    let capitalzedArr = arrToMap.map((word, ind) => {
        if (ind % 2 === 0) {
            return capitalize(word);
        }
        return word;
    })

    return capitalzedArr.join(' ')
}

function extensionSearch(extension, files) {

    let result = files.filter(filename => filename.includes(extension))

    return result;

}

function getPopulation(arrOfCountries, arrOfSelectCountries) {

    let totalPopulation = arrOfCountries.reduce((total, country) => {

        if (arrOfSelectCountries.length === 0) {
            total += country.population;
        }
        if (arrOfSelectCountries.includes(country.name)) {

            total += country.population;
        }

        return total;

    }, 0)

    return totalPopulation;
}


