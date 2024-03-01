$("#connexion ").validate({ 
    rules: {

        emailConnexion: {
          required: true,
          maxlength: 255,
          email: true
       },
       mdpConnexion: {
          required: true,
          minlength: 6
       }
    },
   // bouton valider 
    submitHandler: function(form) {
       
       var email = $("#emailConnexion").val();
       var mdp = $("#mdpConnexion").val();

       // test des variables
       //console.log(email);
       //console.log(mdp);

       connection(email,mdp);
    }

});


function connection(email,mdp){
    // test fonction 
    console.log('fonction connection');
    // je recupere mes utilisateurs enregistré
    var utilisateurEnregistrer = sessionStorage.getItem("utilisateurEnregistrer");
    console.log(utilisateurEnregistrer);

    if (!utilisateurEnregistrer) {
        utilisateurEnregistrer = [];
      } else {
        utilisateurEnregistrer = JSON.parse(utilisateurEnregistrer);
      }

    //console.log('connect Mail : ' + email);
    //console.log('connect mdp : ' + mdp);

    var connexion = false;

    for (i in utilisateurEnregistrer){
        //debugger;
        console.log( i, utilisateurEnregistrer[i]);

        if(utilisateurEnregistrer[i].email == email && utilisateurEnregistrer[i].mdp == mdp ){
            // Enregistrement de l'utilisateur en local storage
            sessionStorage.setItem("currentUserId", i);
            connexion = true; 
            // Enregistrement de la connexion a true en local storage
            sessionStorage.setItem("estConnecte", connexion);
            break;
        }

     }

if (connexion) {
    alert('connecté');
    location.href = "profil.html";

}else{
    alert('non connecté');
}


}