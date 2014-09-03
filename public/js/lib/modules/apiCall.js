define([],
  function() {


//-----------INITIAL API CALL------------------------
  var apiCall = function(type, callback, movie_div) {
    $.ajax({
      type:'GET',
      url:'https://api.themoviedb.org/3/'+type,
      data:{ api_key: '831c069421869a776028d9e27fa5b512',
      },
      error: function(errormessage){console.log('error');}
    })
    .done(function(data){
    $('.movie_info').remove();
      callback(data, movie_div);
    });

  };

// ----------SEARCH API CALL-------------------------
  var apiCallSearch = function(words, callback){
   $.ajax({
         type:'GET',
         url:'https://api.themoviedb.org/3/search/movie',
         data:{
           query: words,
           api_key: '831c069421869a776028d9e27fa5b512'
         }
       }).done(function(data){callback(data);
    });
  };

  return {
    apiCall: apiCall,
    apiCallSearch: apiCallSearch
  };
});
