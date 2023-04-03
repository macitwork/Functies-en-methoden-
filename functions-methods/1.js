// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com


function getEmailDomain(email) {
    // const atIndex = email.indexOf('@');
    if (atindex !== -1) {
        return email.slice(atIndex + 1);
    } else {
        return null; // Geen geldig emailadres
    }
}

// Testen van de functie
console.log(getEmailDomain("n.eeken@novi-education.nl")); // verwachte uitkomst: novi-education.nl
console.log(getEmailDomain("t.mellink@novi.nl")); // verwachte uitkomst: novi.nl
console.log(getEmailDomain("a.wiersma@outlook.com")); // verwachte uitkomst: outlook.com



// Testen van de functie
console.log(typeOfEmail("n.eeken@novi-education.nl")); // verwachte uitkomst: "Student"
console.log(typeOfEmail("t.mellink@novi.nl")); // verwachte uitkomst: "Medewerker"
console.log(typeOfEmail("novi.nlaapjesk@outlook.com")); // verwachte uitkomst: "Extern"
console.log(typeOfEmail("a.wiersma@outlook.com")); // verwachte uitkomst: "Extern"


