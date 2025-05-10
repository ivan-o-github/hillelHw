function pow(mainNumber,stypin) {
    var result = mainNumber;
    for (i = 1; i < stypin; i++){
        result = (result * mainNumber);
    }
    console.log( "Result is: " + result + ". This is result of " + mainNumber + " raised to " + stypin + ".");
}

pow(2,3);