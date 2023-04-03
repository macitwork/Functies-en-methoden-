
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

function functionCumLaude(grades) {
    let count = 0;
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 8) {
            count++;
        }
    }
    return count;
}

console.log(functionCumLaude([9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6])); // verwachte uitkomst: 6
console.log(functionCumLaude([6, 4, 5])); // verwachte uitkomst: 0
console.log(functionCumLaude([8, 9, 4, 6, 10])); // verwachte uitkomst: 3