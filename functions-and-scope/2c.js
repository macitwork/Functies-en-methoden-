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