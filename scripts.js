jQuery(document).ready(function(){
    $('.burgermenu').on('click', function(){
        $('.mob-nav').toggle();
    })
});

// close hamburger menu after click a
$( '.mob-nav a' ).on("click", function(){
    $('.mob-nav').toggle();
  });
  
