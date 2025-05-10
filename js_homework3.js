function pow(mainNumber,stypin) {
    var firstMainNumber = mainNumber;
    for (i = 1; i < stypin; i++){
        mainNumber = (mainNumber * firstMainNumber);
    }
    console.log( "Result is: " + mainNumber + ". This is result of " + firstMainNumber + " raised to " + stypin + ".");
}

pow(3,4);