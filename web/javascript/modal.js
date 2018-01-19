$(document).ready(function(){
  console.info('Oh, why hello there! Thanks for taking a gander at the code in the inspector. Please enjoy the class names, fun declarations, and image sizes. I am not one to leave anyone in boredom, whilst inspecting in the...inspector...so here is a random factoid: If one were to bang their head against the wall for an hour, one could potentially burn 150 calories...');
  console.log('%c WOOOO!!!!', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');
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
