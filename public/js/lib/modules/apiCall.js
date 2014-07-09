define(['underscore', 'jquery'],
  function(_, $) {

  var apiCall = function(type) {
    $.ajax({
      type:'GET',
      url:'https://api.themoviedb.org/3/'+type,
      data:{ api_key: '831c069421869a776028d9e27fa5b512'
      }
    }).done(function(data){return data;});
  };

  var apiCallSearch = function(words){
     $.ajax({
      type:'GET',
      url:'https://api.themoviedb.org/3/search/movie',
      data:{
        query: words,
        api_key: '831c069421869a776028d9e27fa5b512'
      }
    }).done(function(data){ return data;});
  };

  return {
    apiCall: apiCall,
    apiCallSearch: apiCallSearch
  };
});
