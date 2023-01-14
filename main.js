function premierMot () {
    let phrase = prompt('Ecrivez votre phrase, s\'il vous plait');
    
    // if (validate(phrase)) {
    //     phrase = phrase.slice(0, phrase.length - 1);
    //     console.log(phrase);
    // }
    let mot = phrase.split(/[-_' '.]+/);
    let result = mot[0];
    return alert('Premier mot est ' + result);
}

// function validate(phrase) {
//     if (phrase.split(',')) {
//         return true;
//     } else {
//         return false;
//     }
// }