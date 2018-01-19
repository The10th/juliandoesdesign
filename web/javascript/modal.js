$(document).ready(function(){
  console.info('Oh, why hello there! Thanks for taking a gander at the code in the inspector. Please enjoy the class names, fun declarations, and image sizes. I am not one to leave anyone in boredom, whilst inspecting in the...inspector...so here is a random factoid: If one were to bang their head against the wall for an hour, one could potentially burn 150 calories...');
});

$(document).delegate('[data-action=show-modal]', 'click', function(event){

  event.stopPropagation();

  var $path = $(this).data('path');

  showGodTier($path);
});

$(document).delegate('[data-action=exit-modal]', 'click', function(event){

  var $modal = $(this).parent('[data-modal]');

  $('body').removeClass('u-noverFlow');
  $modal.hide('slide', {'direction': 'down'}, 350).promise().done(function(){

    $modal.removeClass('is-active').removeAttr('style');
  });
});


function showGodTier(path) {

  $('[data-modal='+ path +']').addClass('is-active').promise().done(function(){

    $('body').addClass('u-noverFlow');
  });
}
