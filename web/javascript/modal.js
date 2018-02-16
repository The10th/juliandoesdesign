$(document).ready(function(){

  var console_welcome = 'Oh, why hello there!\r\n\r\n';
  var console_message = 'Thanks for taking a gander at my bit code in this here fine inspector. Please enjoy the class names, fun declarations, and image sizes. I am not one to leave anyone in boredom, whilst inspecting in the...inspector...so here is a random thing to read: (psst, refresh for more things):\r\n\r\n';
  var welcome_style   = 'font-weight: 600; font-size: 24px; color: rgba(255,255,255,.4); text-shadow: 0px -1px 0 #9C27B0, -1px 2px 0 rgb(64, 235, 245), 1px 4px 0 rgb(255, 0, 253);';
  var message_style   = 'color: #1d2647; font-size: 12px;';
  var info_style      = 'color: #1d2647; font-weight: 600;';
  var facts           = Array('The collective noun for a group of geese on the ground is a \'gaggle\', unfortunately a group of sheep is not known as a \'shaggle\'.',
                              'While \'Internet Addiction Disorder\' is not listed in the DSM-5 as a disorder, Internet Gaming Addiction somehow is. ¯\_(ツ)_/¯',
                              'Movie trailers were traditionally shown after the feature presentation...hence the word: trailer',
                              'Han Shot First. Always did, always has...never not that.',
                              'An individual is, apparently, incapable of snoring & dreaming simultaneously. Drooling can, however, still occur.',
                              'On average, roughly 60% of the time, a CSS codebase will work everytime.',
                              'The Twitter bird has a name, it\'s...it\'s Larry.',
                              'There is a rather unfortunate phobia that exists: Panphobia. It is not, as the name would lead you to think, the fear of Peter Pan, but a literal fear of #allTheThings.',
                              'Originally, the CSS em unit was derived from the width of the capital letter M, which is where its name came from...lol, ikr?',
                              '#badA55 is a valid hexcode for a CSS color declaration. It\'s lime green - there, now you won\'t have to put your eyes through having to look at it.',
                              'The first Carnival in Brazil dates back as far as 1723.',
                              'The ancient and revered Japanese art of \'Karaoke\' means: An Empty Orchestra.',
                              'Coke does NOT taste like Pepsi.',
                              'Julian Lennon was forced to bid & purchase letters he wrote to his own father, John Lennon, at auction because Yoko Ono wouldn\'t give the letters to him. SUPER FUN FACT: I am named after Julian Lennon...I think...',
                              'Haiku:\r\nWaving Jedi hand,\r\nyou want to reach out to me,\r\nlet\'s grab some coffee.');

  var console_factoid = facts[Math.floor(Math.random()*facts.length)];

  console.info('%c'+ console_welcome +'' + '%c'+ console_message +'' + '%c'+ console_factoid +'', welcome_style , message_style , info_style);
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
