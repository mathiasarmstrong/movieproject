define(['lib/modules/initialize'],
function(initialize){

  var reset = function(){
    $('.movie').remove();
    var words = $('.search_text').val();
    initialize.search(words);
  };

  return{
    reset: reset
  };
});
