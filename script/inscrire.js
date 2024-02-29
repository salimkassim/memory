$(function () {});

$("#inscription ").validate({
  rules: {
    nom: {
      required: true,
      minlength: 3,
      maxlength: 255,
    },
    email: {
      required: true,
      maxlength: 255,
      email: true,
    },
    mdp: {
      required: true,
      minlength: 6,
    },
    mdpConfirme: {
      required: true,
      minlength: 6,
      equalTo: "#mdp",
    },
  },
  // message erreur
  messages: {
    nom: {
      required: "Choissisez un pseudo  contenant au moins 3 caractères.",
    },
    email: "Rentrez un email valide",
    mdp: "Au moins un symbole, un chiffre, ainsi que 6 carateres minimum.",
    mdpConfirme: {
      required: "Veuillez confirmez le mot de passe",
      equalTo: "les mot de passe doivent être identique",
    },
  },
  // bouton valider
  submitHandler: function (form) {
    var id = generateId();
    var nom = $("#nom").val();
    var email = $("#email").val();
    var mdp = $("#mdp").val();
    var mdpConfirm = $("#mdp").val();

    inscription(id, nom, email, mdp, mdpConfirm);
  },
});

// genere un identifiant unique
function generateId() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

function inscription(id, nom, email, mdp, mdpConfirm) {
  // Test de la récuperation de mes données utilisateur(saisie)
  console.log(id);
  console.log(nom);
  console.log(email);
  console.log(mdp);
  console.log(mdpConfirm);

  //debugger;

  var utilisateurJson = sessionStorage.getItem("utilisateurEnregistrer");

  if (!utilisateurJson) {
    utilisateurJson = [];
  } else {
    utilisateurJson = JSON.parse(utilisateurJson);
  }

  utilisateurJson.push({
    id: id,
    nom: nom,
    email: email,
    mdp: mdp,
    mdpConfirm: mdpConfirm,
  });

  sessionStorage.setItem(
    "utilisateurEnregistrer",
    JSON.stringify(utilisateurJson)
  );
}
