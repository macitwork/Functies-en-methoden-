// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6

// Om het aantal studenten dat cum laude is afgestudeerd te checken, kunnen we de volgende stappen volgen:
// 1. Initialiseer een teller op 0 om het aantal cum laude afgestudeerden bij te houden.
// 2. Loop door de array met cijfers.
// 3. Voor elk cijfer dat 8 of hoger is, verhoog de teller met 1.
// 4. Log het aantal cum laude afgestudeerden in de terminal.

// Implementatie:
let cumLaudeCount = 0;
for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 8) {
        cumLaudeCount++;
    }
}
console.log(cumLaudeCount); // Output: 6

/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3

function cumLaude(grades) {
    let count = 0;
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 8) {
            count++;
        }
    }
    return count;
}

console.log(cumLaude([9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6])); // verwachte uitkomst: 6
console.log(cumLaude([6, 4, 5])); // verwachte uitkomst: 0
console.log(cumLaude([8, 9, 4, 6, 10])); // verwachte uitkomst: 3


/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.
//  +++++++++++++++++++++++++++++++++
 //   Om het gemiddelde eindcijfer te berekenen uit de grades array moeten de volgende stappen worden uitgevoerd:

 //   Definieer een variabele sum en zet deze op 0.
 //  Loop door de array heen en tel bij iedere iteratie het cijfer op bij sum.
 //   Bepaal het gemiddelde door de som te delen door het aantal cijfers in de array (grades.length).
 //   Log het gemiddelde in de terminal.
 //   ++++++++++++++++++++++++++++++
// ---- Verwachte uitkomst: 6.642857142857143
let sum = 0;

for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
}

const average = sum / grades.length;
console.log(average); // 6.642857142857143


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



/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

//Om een getal af te ronden op twee decimalen kun je de toFixed() methode gebruiken. Deze methode neemt één argument, namelijk het aantal decimalen waarop het getal afgerond moet worden.

   // Hieronder zie je hoe je toFixed() kunt gebruiken om het gemiddelde cijfer netjes af te ronden op twee decimalen:


function averageGrade(grades) {
    let total = 0;
    for (let i = 0; i < grades.length; i++) {
        total += grades[i];
    }
    let average = total / grades.length;
    return average.toFixed(2);
}

console.log(averageGrade(grades)); // geeft 6.64

//In dit voorbeeld roepen we de toFixed() methode aan op de average variabele. Hierdoor wordt het gemiddelde cijfer afgerond op twee decimalen. Let op: de toFixed() methode retourneert een string, geen getal.


/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 9
//Om het hoogst behaalde cijfer te vinden op basis van de grades array, kunnen we de volgende stappen nemen:

   //// We maken een variabele highestGrade aan en zetten deze op 0. Dit is de waarde waar we het hoogst behaalde cijfer in gaan opslaan.
   // We gaan de grades array langs met behulp van een for-loop. Voor ieder cijfer in de array doen we het volgende:
  //  a. We checken of het huidige cijfer hoger is dan highestGrade.
 //   b. Als dat zo is, slaan we het huidige cijfer op in highestGrade.
 //   We loggen highestGrade in de console.

   // Hieronder staat het script dat deze stappen uitvoert:
const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

let highestGrade = 0;

for (let i = 0; i < grades.length; i++) {
    if (grades[i] > highestGrade) {
        highestGrade = grades[i];
    }
}

console.log(highestGrade);

/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10


function highestGrade(grades) {
    let highest = grades[0]; // Set the initial value to the first element in the array
    for (let i = 1; i < grades.length; i++) { // Start the loop at index 1 (the second element in the array)
        if (grades[i] > highest) { // Check if the current element is higher than the current highest value
            highest = grades[i]; // If so, set the current element as the new highest value
        }
    }
    return highest; // Return the highest value found in the array
}
const grades1 = [8, 6, 7, 9, 5, 8, 9];
const grades2 = [6, 4, 5];
const grades3 = [8, 9, 4, 6, 10];

console.log(highestGrade(grades1)); // Output: 9
console.log(highestGrade(grades2)); // Output: 6
console.log(highestGrade(grades3)); // Output: 10
