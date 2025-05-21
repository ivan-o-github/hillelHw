var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
    };

function numberTrim(string){
let result = ""
for (let i = 0; i < string.length; i++) {
    let tempChar = string[i]
    if (isNaN(tempChar) || tempChar === " ") {
        tempChar = ""
    }
    result = result + tempChar
}
return Number.parseInt(result);
}    

function price(){
    let sum = 0
    for(let i in services){
        sum += numberTrim(services[i])
    }
    console.log("Сумма послуг = " + sum + " грн")
}

function minPrice(){
    let minNumber = 0
    let namePoslugi = ""
    for (let i in services){
        let currentPrice = numberTrim(services[i])
        if (minNumber == 0 || currentPrice < minNumber){
        minNumber = numberTrim(services[i])
        namePoslugi = i
        }
    }
    console.log("Найдешевшою послугою є " + namePoslugi + " з ціною = " + minNumber + " грн")
}

function maxPrice(){
    let maxNumber = 0
    let namePoslugi = ""
    for (let i in services){
        let currentPrice = numberTrim(services[i])
        if (maxNumber == 0 || currentPrice > maxNumber){
        maxNumber = numberTrim(services[i])
        namePoslugi = i
        }
    }
    console.log("Найдорожчою послугою є " + namePoslugi + " з ціною = " + maxNumber + " грн")
}

function objectShow(){
    for (let i in services){
        console.log(i + " : " + services[i])
    }
}

price()
minPrice()
maxPrice()

console.log("\nТепер додамо нову послугу\n\nДо---------------------")
objectShow()
services['Розбити скло'] = "200 грн";
console.log("Після------------------")
objectShow()
console.log("\nВиконаємо операції і подвимось що змінилось: \n")

price()
minPrice()
maxPrice()
