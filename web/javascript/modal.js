$(document).delegate('[data-action=show-modal]', 'click', function(event){
  var $path = $(this).data('path');

  $('[data-modal='+ $path +']').addClass('is-active').promise().done(function(){

    $('body').addClass('u-noverFlow');
  });
});

$(document).delegate('[data-action=exit-modal]', 'click', function(event){

  var $modal = $(this).parent('[data-modal]');

  $('body').removeClass('u-noverFlow');
  $modal.hide('slide', {'direction': 'down'}, 350).promise().done(function(){

    $modal.removeClass('is-active').removeAttr('style');
  });
});
