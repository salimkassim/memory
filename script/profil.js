$(function(){



      $('#choixMemory').on('change', choix);

})

function choix(){

    alert($('#choixMemory').val());

    switch(n) {
        case 1:
         //execute code block 1
         break;
        case 2:
         //execute code block 2
         break;
        default:
        // code to be executed if n is different from case 1 and 2
       }            

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

