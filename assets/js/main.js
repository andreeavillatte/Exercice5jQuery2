// //quand la page est chargée (ready)
$(document).ready(function(){
    // quand on a le focus sur l'input
    $('input').focus(function(){
        // on change le style du formulaire
      $(this).css('border', '1px solid green');
    });
    $('input').blur(function(){
      $(this).css('border', '1px solid red');
    });
  });