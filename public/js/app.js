require.config({
  paths:{
    }
});

require(['lib/modules/initialize','lib/modules/search'],
  function(initialize, search) {

    initialize.initialize();
// event listeners


    $('search_text').on('submit', initialize.clicker);

    $('.search').on('click', search.reset);

    $(document).on('mouseenter','.movie', initialize.movieInfo);
    $(document).on('mouseenter','.movie', function(){
      // $(this).addClass('w2 h2');
    });
    $(document).on('mouseleave','.movie', function(){
      // $(this).removeClass('w2 h2');
    });

    $(document).on('click',function(){$('.movie_info').remove();


  });

var $container = $('.masonry');
// initialize
var msnry = $container.masonry({
    columnWidth: 60
});

// $(document).on('mouseleave','.item',function(){
//   $('.item').removeClass('gigante');
// $container.masonry();

// });
$(document).on('click', '.item', function(){
  $(this).addClass('gigante');
  console.log("this should only render once");
  });



});







