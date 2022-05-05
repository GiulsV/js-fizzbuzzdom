
// Scrivi un programma che stampi in console i numeri da 1 a 100.
// MILESTONE 1
// Per i multipli di 3 stampi "Fizz" al posto del numero e per i multipli di 5 stampi "Buzz". Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".

// 1. Genera numeri da 1 a 100
for (let i = 1; i <= 100; i++){

    // 2. Stampa FizzBuzz se multiplo di 3 e 5

    if((i%3 == 0) && (i%5 == 0)){
        console.log ("FizzBuzz");
    }

    // 3. Stampa Fizz se multipplo di 3

    else if(i%3 == 0){
        console.log ("Fizz");
    }

    // 4. Stampa Buzz se multipplo di 5

    else if ((i%5 == 0)){
        console.log ("Buzz");
    }

    // 5. Scrive i numeri in console

    else {
        console.log (i);
    }
}