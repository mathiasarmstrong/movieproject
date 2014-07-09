// define(['underscore', 'jquery', 'lib/modules/apiCall', 'lib/modules/templates'],
//   function(_, $, apiCall, templates) {

//   var movieInfo = function(event) {
//     var id = event.data.movie.id
//     apiCall.apiCall('movie/' + id)
//     .done(function(data){
//       var html2 = (templates.templates(2)(data));
//       $(document).trigger('change', [event.currentTarget, html2] );
//     });
//   };
//   return {
//     movieInfo: movieInfo
//   };
// });

