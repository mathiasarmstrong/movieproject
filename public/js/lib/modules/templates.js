define(['underscore', 'jquery'], function(_, $) {

  var templates = function(n) {

    var source   = $( "#movie-template" + n ).html();
    var template = Handlebars.compile(source);
    return template;
  };
  return {
    templates: templates
  };
});
