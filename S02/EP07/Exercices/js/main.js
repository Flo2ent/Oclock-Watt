money.fxDemanderUtilisateurCheque();

console.log("Nombre de chèques introduits : " + money.nbDeCheques);

console.log("Montant total des chèques : " + money.montantTotalDesCheques);

console.log(
  "Moyenne des montants : " + averageOfAnArray(money.cheques.montants)
);

console.log(
  "Nombre de chèques dont le montant est inférieur à 200 € : " +
    money.nbDeChequesInfAdeuxCent
);

console.log(
  "Montant total des chèques dont le montant est inférieur à 200 € : " +
    money.montantTotalDesChequesInfAdeuxCent
);

console.log(
  "Nombre de chèques dont le montant est supérieur à 200 € : " +
    money.nbDeChequesSupAdeuxCent
);

console.log(
  "Montant total des chèques dont le montant est supérieur à 200 € : " +
    money.montantTotalDesChequesSupAdeuxCent
);

console.log(
  "Numéro du chèque dont le montant est le plus petit : " +
    money.numDuChequeAuMontantLePlusPetit
);

console.log(
  "Montant du chèque dont le montant est le plus petit : " +
    money.montantDuChequeAuMontantLePlusPetit
);

console.log(
  "Numéro du chèque dont le montant est le plus grand : " +
    money.numDuChequeAuMontantLePlusGrand
);

console.log(
  "Montant du chèque dont le montant est le plus grand : " +
    money.montantDuChequeAuMontantLePlusGrand
);
