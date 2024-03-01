$(function(){



      $('#choixMemory').on('change', choixMemory);
      $('#choixTaille').on('change', choixTaille);

})

function choixMemory(){
    var id = parseInt($('#choixMemory').val());

    console.log(id);

    switch(id) {
        case 1:
        $("#imgMemory").attr("src", "ressources/alphabet-scrabble/memory_detail_scrabble.png").attr("style", "display:block!important");
         break;
        case 2:
            $("#imgMemory").attr("src", "ressources/animaux/memory_detail_animaux.png").attr("style", "display:block!important");
         break;
         case 3:
            $("#imgMemory").attr("src", "ressources/animauxAnimes/memory_detail_animaux_animes.png").attr("style", "display:block!important");
         break;
         case 4:
            $("#imgMemory").attr("src", "ressources/animauxdomestiques/memory_detail_animaux_domestiques.png").attr("style", "display:block!important");
         break;
         case 5:
            $("#imgMemory").attr("src", "ressources/chiens/memory_details_chiens.png").attr("style", "display:block!important");
         break;
         case 6:
            $("#imgMemory").attr("src", "ressources/dinosaures/memory_detail_dinosaures.png").attr("style", "display:block!important");
         break;
         case 7:
            $("#imgMemory").attr("src", "ressources/dinosauresAvecNom/memory_details_dinosaures_avec_nom.png").attr("style", "display:block!important");
         break;
         case 8:
            $("#imgMemory").attr("src", "ressources/memory-legume/memory_detail.png").attr("style", "display:block!important");
         break;
        default:
        // code to be executed if n is different from case 1 and 2
       }            
}

function choixTaille(){
    var id = parseInt($('#choixTaille').val());

    console.log(id);

    switch(id) {
        case 1:
        
         break;
        case 2:
           
         break;
        default:
        // code to be executed if n is different from case 1 and 2
       }            

}


var estConnecteProfil = sessionStorage.getItem("estConnecte");

console.log("est connecté :"+estConnecteProfil);

if(estConnecteProfil){
    $("<li class='nav-item'><a class='nav-link' href='profil.html'>Profil</a></li>").insertAfter("li.profilIteml"); 
}




// id de mon utilisateur connecté 
var utilisateurId = sessionStorage.getItem("currentUserId");
console.log(utilisateurId);

var utilisateurEnregistrer = sessionStorage.getItem("utilisateurEnregistrer");

if(utilisateurEnregistrer){
    utilisateurEnregistrer = JSON.parse(utilisateurEnregistrer);
}
console.log(utilisateurEnregistrer[utilisateurId]);


$('#nomProfil').val(utilisateurEnregistrer[utilisateurId]['nom']).prop('disabled', true);
$('#emailProfil').val(utilisateurEnregistrer[utilisateurId]['email']).prop('disabled', true);

