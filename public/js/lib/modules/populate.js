define(['underscore', 'jquery', 'lib/modules/templates', 'lib/modules/initialize'],
  function(_, $, templates, initialize) {

  var populate = function(data){
    data.results.forEach(function(movie) {
      var html = $(templates.templates(1)(movie));
      $('.main').append(html);
    });
  };

  return {
    populate: populate
  };

});
