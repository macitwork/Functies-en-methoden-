
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
console.log(typeOfEmail);