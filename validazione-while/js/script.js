// let userInfo = prompt('Dimmi il tuo nome');
// // Finche userInfo è vuota, richiedo col prompt l'informazione
// while(userInfo.length === 0) {
//     userInfo = prompt('Dimmi il tuo nome');
// }

// console.log(userInfo);

let userInfo;
do {
    userInfo = prompt('Dimmi il tuo nome');
} while (userInfo.length === 0);
