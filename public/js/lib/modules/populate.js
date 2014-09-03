define(['lib/modules/templates', 'lib/modules/initialize'],
  function(templates, initialize) {

  var populate = function(data, movie_div){

    data.results.forEach(function(movie) {
       if ($.type(movie.poster_path) === 'string')
      {
        var html = $(templates.templates(1)(movie));
        $('.main').append(html);
      }
    });
  };


  var popup  = function(data, movie_div){
      var html2 = (templates.templates(2)(data));
      // $(movie_div).prepend(html2);

      // $(movie_div).on('mouseleave',function(){
      // // $(movie_div).addClass('small-1');
      // });
    };

  return {
    populate: populate,
    popup: popup
  };

});
