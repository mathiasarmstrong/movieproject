define(['lib/modules/apiCall','lib/modules/populate','lib/modules/templates'],
  function(apiCall, populate, templates) {



  var initialize = function() {
   apiCall.apiCall('movie/now_playing', populate.populate, null);
  };



  var movieInfo = function(event) {
    $('.movie_info').remove();
    // $('.movie').removeClass('small-3');

    movie_div = event.currentTarget;
    // $(movie_div).removeClass('small-1');
    // $(movie_div).addClass('small-3');
    var id = $(movie_div).data('id');
    apiCall.apiCall('movie/' + id, populate.popup, movie_div);
  };

  var search = function(words){
      apiCall.apiCallSearch( words, populate.populate );
  };


  var clicker = function(e){
      e.preventDefault();
      $('.search').trigger('click');
  };



  return {
    search: search,
    movieInfo: movieInfo,
    initialize: initialize,
    clicker: clicker
  };
});
