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


function keyifyArrayOfObjects(key, superheroes) {

    let result = superheroes.reduce((finalObj, currentObj) => {
        finalObj[currentObj[key]] = currentObj;
        return finalObj;

    }, {})

    return result;

}

function powerLevelAverage(superheroes) {

    let numberOfSuperheroes = superheroes.length;

    let totalPower = superheroes.reduce((totalPowerLevel, curretSuperhero) => {
        totalPowerLevel += curretSuperhero.powerLevel;
        return totalPowerLevel;

    }, 0)

    let averagePower = totalPower / numberOfSuperheroes;

    return Math.round(averagePower);

}

function mapReduce(arr, callback) {

    let result = arr.reduce((finalArr, currentElement) => {

        finalArr.push(callback(currentElement));
        return finalArr;

    }, [])

    return result;
}

function filterReduce(arr, callback) {

    let result = arr.reduce((finalArr, currentElement) => {
        if (callback(currentElement)) finalArr.push(currentElement)
        return finalArr;

    }, [])

    return result;
}

function inYourBudget(maxPrice, items) {

    let result = items.filter((item) => {
        return item.price <= maxPrice;
    }).map((item) => {
        return item.item
    })

    return result;
}

function separateAndReturnNames(superheroes, firstOrLast, maxLengthOfName) {

    let result = superheroes.map((superhero) => {
        let splitName = superhero['name'].split(' ')
        superhero['firstName'] = splitName[0];
        superhero['lastName'] = splitName[1];

        return superhero;
    }).filter((superhero) => {
        return superhero[firstOrLast].length <= maxLengthOfName;
    }).map((superhero) => {
        return superhero[firstOrLast]
    })

    console.log(result)
    return result;
}

function priorityTodoDuration(todoList) {

    let result = todoList.filter((task) => {
        return task.priority === 'high';
    }).reduce((totalMinutes, task) => {
        totalMinutes += task.duration;
        return totalMinutes;

    }, 0)

    return result;
}