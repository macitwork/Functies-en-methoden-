
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






