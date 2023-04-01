// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com


function getEmailDomain(email) {
    const atIndex = email.indexOf('@');
    if (atIndex !== -1) {
        return email.slice(atIndex + 1);
    } else {
        return null; // Geen geldig emailadres
    }
}

// Testen van de functie
console.log(getEmailDomain("n.eeken@novi-education.nl")); // verwachte uitkomst: novi-education.nl
console.log(getEmailDomain("t.mellink@novi.nl")); // verwachte uitkomst: novi.nl
console.log(getEmailDomain("a.wiersma@outlook.com")); // verwachte uitkomst: outlook.com


/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"
function typeOfEmail(email) {
    const domain = getEmailDomain(email);
    if (!domain) {
        return null; // Geen geldig emailadres
    } else if (domain === 'novi.nl') {
        return 'Medewerker';
    } else if (domain === 'novi-education.nl') {
        return 'Student';
    } else {
        return 'Extern';
    }
}

// Testen van de functie
console.log(typeOfEmail("n.eeken@novi-education.nl")); // verwachte uitkomst: "Student"
console.log(typeOfEmail("t.mellink@novi.nl")); // verwachte uitkomst: "Medewerker"
console.log(typeOfEmail("novi.nlaapjesk@outlook.com")); // verwachte uitkomst: "Extern"
console.log(typeOfEmail("a.wiersma@outlook.com")); // verwachte uitkomst: "Extern"


/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

function checkEmailValidity(email) {
    if (!email.includes('@')) {
        return false; // Er moet een @ in het emailadres zitten
    } else if (email.endsWith('.')) {
        return false; // Punt mag niet als laatste karakter in domeinnaam zitten
    } else if (email.includes(',')) {
        return false; // Er mag geen komma in het emailadres zitten
    } else {
        return true;
    }
}

// Testen van de functie
console.log(checkEmailValidity("n.eeken@novi.nl")); // verwachte uitkomst: true
console.log(checkEmailValidity("tessmellink@novi.nl")); // verwachte uitkomst: true
console.log(checkEmailValidity("n.eekenanovi.nl")); // verwachte uitkomst: false
console.log(checkEmailValidity("n.eeken@novinl.")); // verwachte uitkomst: false
console.log(checkEmailValidity("tessmellink@novi,nl")); // verwachte uitkomst: false