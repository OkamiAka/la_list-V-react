class craetUtilisateur {
  constructor(
    nom,
    prenom,
    avatar = "https://static.vecteezy.com/ti/vecteur-libre/p3/4223162-sale-grunge-dessin-a-la-main-avec-coups-de-pinceau-croix-x-vector-illustration-isole-sur-fond-blanc-mark-graphic-design-check-mark-symbol-no-button-for-vote-in-check-box-web-etc-gratuit-vectoriel.jpg"
  ) {
    this.avatar = avatar;
    this.nom = nom;
    this.prenom = prenom;
  }
}

const utilisateur = [
  new craetUtilisateur("TEST 1", "test 1"),
  new craetUtilisateur("TEST 2", "test 2"),
  new craetUtilisateur("TEST 3", "test 3"),
  new craetUtilisateur("TEST 4", "test 4"),
  new craetUtilisateur("TEST 5", "test 5"),
];

export default utilisateur;
