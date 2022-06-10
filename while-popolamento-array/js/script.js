// Chiedo una squadra di Calcio all'utente
// e la salvo in un array finchè l'array non ha 3 squadre di calcio

// Creiamo l'array vuoto delle squadre di calcio
const teamsArray = [];

// Finchè l'array non ha 3 elementi chiedo una squadra di calcio
while(teamsArray.length < 3) {
    const userTeam = prompt('Dimmi una squadra');

    // Pusho solo se la stringa che mi da l'utente non è vuota!
    if(userTeam.length > 0) {
        teamsArray.push(userTeam);
    }

    console.log(teamsArray);
}
