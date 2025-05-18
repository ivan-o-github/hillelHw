function random(min, max) {
    return Math.round(min + Math.random() * (max - min))
}

function percentageCalc(total, number){
    return ((100 * number) / total).toFixed(2);
}

function checkProbabilityCount(kolNumber) {
    var numberAll = 0
    var countNeparni = 0
    var countParni = 0
    for(let i = 0; i < kolNumber; i++) {
        if (random(100,1000) % 2){
            countNeparni++
            numberAll++
        } else {
            countParni++
            numberAll++
        }
    }

    console.log("всього чисел: " + numberAll)
    console.log("парні = " + countParni + " непарні = " + countNeparni)
    if (countNeparni == countParni){
        console.log("50% на 50%")
    } else {
        console.log("результат не 50% на 50%")
    }
    console.log("відсоток парних " + percentageCalc(numberAll, countParni) + "% до непарних " + percentageCalc(numberAll, countNeparni) + "%")
}

checkProbabilityCount(6);