var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" // Нам такі не підходять
    },
];

let validEmailArr = []
let failedEmailArr = []

var pattern = /[A-Za-z0-9]+.?[A-Za-z0-9]*@(gmail.com|yahoo.com)/

for (i = 0; i < arr.length; i++) {
    if (pattern.test(arr[i].email)) {
        validEmailArr.push(arr[i])
    } else {
        failedEmailArr.push(arr[i])
    }
}

function isLastNamePresent(lastname) {
    if (lastname !== "") {
        return " " + lastname
    } else {
        return lastname;
    }
}

for (i = 0; i < validEmailArr.length; i++) {
    console.log("Користувачу " + validEmailArr[i].userName + isLastNamePresent(validEmailArr[i].lastName) + " можна довіряти, у нього емейл - " + validEmailArr[i].email)
}

for (i = 0; i < failedEmailArr.length; i++) {
    console.log("А ось користувач " + failedEmailArr[i].userName + isLastNamePresent(failedEmailArr[i].lastName) + " не пройшов перевірку, його емейл - " + failedEmailArr[i].email)
}