function pow(mainNumber,stypin) {
    var firstMainNumber = mainNumber;
    for (i = 1; i < stypin; i++){
        mainNumber = (mainNumber * firstMainNumber);
    }
    console.log(mainNumber);
}

pow(3,4);