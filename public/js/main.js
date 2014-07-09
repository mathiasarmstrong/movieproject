// $(document).ready(function(){
//   var source   = $("#movie-template").html();
//   var source2   = $("#movie-template2").html();
//   var template = Handlebars.compile(source);
//   var template2 = Handlebars.compile(source2);

  // $.ajax({
  //   type:'GET',
  //   url:'https://api.themoviedb.org/3/movie/now_playing',
  //   data:{ api_key: '831c069421869a776028d9e27fa5b512'
  //   }
  // })
  // .done(function(data){console.log(data)});


// var populate = function(data){
//   data.results.forEach(function(movie){
//     var html = $(template(movie))
//     $('.main').append(html);
//     html.mouseover({ movie: movie }, movie_info)
//   })
// };



// var movie_info = function(event){
//   id = event.data.movie.id
//   $.ajax({
//     type:'GET',
//     url:'https://api.themoviedb.org/3/movie/'+id,
//     data:{ api_key: '831c069421869a776028d9e27fa5b512'
//     }
//   })
//   .done(function(data){
//     html2 = template2(data);
//     $(document).trigger('change', event.currentTarget );
//   })
// };


// $('search_text').on('submit', function(e){
//   e.preventDefault()})
// $('.search').on('click', function(){
//   $('.movie').remove()
//   var words = $('.search_text').val();
//   $.ajax({
//     type:'GET',
//     url:'https://api.themoviedb.org/3/search/movie',
//     data:{
//       query: words,
//       api_key: '831c069421869a776028d9e27fa5b512',
//     }
//   }).done(function(data){populate(data)})
//   });


// $(document).on('change',function(e, listing){

//   $('.show').remove();


//   $(listing).on('mouseover', function(e){
//     $('.listing').css({
//        left:  e.pageX,
//        top:   e.pageY
//     });
//   });
//   $('.listing').append(html2);
// });




});
