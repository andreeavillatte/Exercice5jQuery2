// //quand la page est chargée (ready)
$(document).ready(function(){
    // quand on a le focus sur l'input, on choissise input pour prendre la version plus generalle
    $('input').focus(function(){
        // on change le style du formulaire. On choissise THIS car this appele ma fonction en haut, avec input
      $(this).css('border', '1px solid green');
    });
    $('input').blur(function(){
      $(this).css('border', '1px solid red');
    });
  });