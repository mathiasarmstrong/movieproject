require.config({
  paths:{
    "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min",
    "underscore": "lib/underscore-min"
    }
});

require(['lib/modules/initialize','lib/modules/search'],
  function(initialize,search) {


// event listeners


    $('search_text').on('submit', initialize.clicker);

    $('.search').on('click', search.reset);

    $(document).on('mouseenter','.movie', initialize.movieInfo);

    initialize.initialize();

  });
