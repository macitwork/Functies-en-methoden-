/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx

//Om de gemiddelde waarde van een array van cijfers te berekenen, kunnen we de volgende stappen uitvoeren:
//
//     Maak een variabele genaamd total en zet deze op 0.
//     Loop over de array en tel elke waarde op bij de total variabele.
//     Deel de total variabele door het aantal elementen in de array om het gemiddelde te berekenen.
//     Return het gemiddelde.
//
// Hier is de implementatie van de averageGrade functie:
function averageGrade(grades) {
    let total = 0;
    for (let i = 0; i < grades.length; i++) {
        total += grades[i];
    }
    const average = total / grades.length;
    return average;
}

//We kunnen deze functie gebruiken om het gemiddelde cijfer van de grades array te berekenen:

//arduino

console.log(averageGrade(grades)); // geeft 6.642857142857143

//En we kunnen ook andere arrays doorgeven aan de functie:

// arduino

console.log(averageGrade([6, 4, 5])); // geeft 5
console.log(averageGrade([8, 9, 4, 6, 10])); // geeft 7.4

