const money = {
  cheques: {
    numeros: [],
    montants: [],
  },
  // montantDuCheque: 0,
  montantDuChequeAuMontantLePlusGrand: 0, // OK
  montantDuChequeAuMontantLePlusPetit: 0, // OK
  montantTotalDesCheques: 0, // OK
  montantTotalDesChequesInfAdeuxCent: 0, // OK
  montantTotalDesChequesSupAdeuxCent: 0, // OK
  nbDeCheques: 0, // OK
  nbDeChequesInfAdeuxCent: 0, // OK
  nbDeChequesSupAdeuxCent: 0, // OK
  numDuChequeAuMontantLePlusGrand: 0, // OK
  numDuChequeAuMontantLePlusPetit: 0, // OK
  numeroDuCheque: -1, // OK

  fxDemanderUtilisateurCheque: () => {
    while (money.numeroDuCheque !== 0) {
      // Demander le numéro du chèque
      money.numeroDuCheque = parseInt(
        prompt("Quel est le numéro du chèque ?")
      );
      // Si le numéro du chèque !== 0
      if (money.numeroDuCheque !== 0) {
        // et ajouter le numero du cheques a l'objet `cheques`
        money.cheques.numeros.push(money.numeroDuCheque);
        // ... alors demander egalement le montant du chèque
        montantDuCheque = Number(
          prompt("Quel est le montant du chèque ?")
        );
        // et ajouter le numero du cheques a l'objet `cheques`
        money.cheques.montants.push(montantDuCheque);
        // ... et incrementer le nombre de chèque
        money.nbDeCheques++;
        // ... et augmenter le montant total des cheques
        money.montantTotalDesCheques += montantDuCheque;
        // ... si le montant du cheque est inferieur a 200
        if (montantDuCheque < 200) {
          // ... incrementer le nombre de chèques inferieurs a 200
          money.nbDeChequesInfAdeuxCent++;
          // ... incrementer le montant total des chèques inferieurs a 200
          money.montantTotalDesChequesInfAdeuxCent += montantDuCheque;
        }
        // ... si le montant du cheque est superieur a 200
        if (montantDuCheque > 200) {
          // ... incrementer le nombre de chèques superieurs a 200
          money.nbDeChequesSupAdeuxCent++;
          // ... incrementer le montant total des chèques superieurs a 200
          money.montantTotalDesChequesSupAdeuxCent += montantDuCheque;
        }
      }
    }

    money.numDuChequeAuMontantLePlusPetit = Math.min(
      ...money.cheques.numeros
    );
    money.numDuChequeAuMontantLePlusGrand = Math.max(
      ...money.cheques.numeros
    );
    money.montantDuChequeAuMontantLePlusPetit = Math.min(
      ...money.cheques.montants
    );
    money.montantDuChequeAuMontantLePlusGrand = Math.max(
      ...money.cheques.montants
    );
  },
};
