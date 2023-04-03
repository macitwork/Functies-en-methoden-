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