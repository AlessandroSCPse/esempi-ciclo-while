// Popolare la ul con i prodotti da acquistare
// Eseguire prima con ciclo for poi con while
const foodToBuy = [
    'farina',
    'latte',
    'pasta',
    'uova'
];

const foodList = document.querySelector('.list');

// Versione col ciclo for
// for(let i = 0; i < foodToBuy.length; i++) {
//     const thisProduct = foodToBuy[i];
//     console.log(thisProduct);
    
//     const newLi = `<li>${thisProduct}</li>`;
//     foodList.innerHTML += newLi;
// }

// Versione col while
let i = 0;
while(i < foodToBuy.length) {
    const thisProduct = foodToBuy[i];
    const newLi = `<li>${thisProduct}</li>`;
    foodList.innerHTML += newLi;

    i++;
}