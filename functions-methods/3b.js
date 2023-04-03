
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