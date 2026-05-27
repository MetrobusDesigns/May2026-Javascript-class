// ciEmailify - creates an email from a two-part name

//     Examples:
//         ciEmailify('dan rodney') -> 'dan.rodney@nobledesktop.com'
//         ciEmailify('Chett Tiller') -> 'chett.tiller@nobledesktop.com'

function firstLastNameEmail(firstName, lastName){
    const emailSuffix = "@nobiledesktop.com";
    const nobleEmailAddress = firstName.toLowerCase() + "." + lastName.toLowerCase() + emailSuffix;
    return nobleEmailAddress;
}

console.log(firstLastNameEmail ("Greyson", "Awesome"));