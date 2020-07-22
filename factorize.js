function fact(n) {

    //n is the number whose factorial we are trying to find.

    let factorial;

    //formula for finding factorial of a number is n(n-1)!

    for (factorial = 1; n > 0; n--) {

        /* We are asigning factorial a value of 1 in the loop
        because the product will never be a zero each time we loop through.
        Then there would be no reason for the algorithm execution.*/

        factorial *= n;
    }
    return factorial;
}

console.log(fact(5));