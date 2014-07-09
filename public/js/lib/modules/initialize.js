define(['underscore', 'jquery', 'lib/modules/apiCall','lib/modules/populate','lib/modules/templates'],
  function(_ , $, apiCall, populate, templates) {

  var initialize = function() {
    var data = apiCall.apiCall('movie/now_playing');
    populate.populate(data);
  };



  var movieInfo = function(event) {
    // $('.movie_info').remove();

    movie_div = event.currentTarget;
    var id = $(movie_div).data('id');

    var data = apiCall.apiCall('movie/' + id);
    var html2 = (templates.templates(2)(data));
    // $('.movie_info').remove();

    $(movie_div).append(html2);

    $(movie_div).on('mouseleave',function(){
      $('.movie_info').remove();
    });
  };

  var search = function(words){
      apiCall.apiCallSearch(words)
      .done(function(data){populate.populate(data);
      });
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
