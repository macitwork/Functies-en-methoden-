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